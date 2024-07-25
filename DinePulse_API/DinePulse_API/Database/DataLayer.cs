using DinePulse_API.Utils;
using System.Data;
using System.Data.SqlClient;
using System.Transactions;

namespace DinePulse_API.Database
{
    public class DataLayer
    {
        private readonly string _connectionString;

        public DataLayer(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("Dinepulse:SqlDb");
            Connection();
        }

        private SqlConnection con;
        private SqlCommand com;
        private SqlDataAdapter da;

        IConfiguration _iconfiguration;
       


        private void Connection()
        {
            try
            {

                con = new SqlConnection(_connectionString);

            }
            catch (Exception ex)
            {
                new LogHelper().LogError(ex.Message);
            }

        }

        public DataTable Getfromdb(string spname)
        {
            try
            {
                com = new SqlCommand(spname, con);
                DataTable dt = new DataTable();
                com.CommandType = CommandType.StoredProcedure;
                da = new SqlDataAdapter(com);
                da.Fill(dt);
                return dt;
            }
            catch (Exception ex)
            {
                new LogHelper().LogError(ex.Message);
                return null;
            }
        }

        public DataTable Getbulkfromdb(string spname, List<SqlParameter> sp = null)
        {
            DataTable dt = new DataTable();
            try
            {
                com = new SqlCommand(spname, con);
                com.CommandTimeout = 300;
                com.CommandType = CommandType.StoredProcedure;
                if (sp != null)
                    com.Parameters.AddRange(sp.ToArray());
                da = new SqlDataAdapter(com);
                da.Fill(dt);
                return dt;
            }
            catch (SqlException ex)
            {
                new LogHelper().LogError(" Commit Exception Type: " + ex.GetType());
                
               
                if (ex.Number == 50000)
                {
                    throw new InvalidOperationException(ex.Message);
                }
                return dt;
            }
        }
        public DataSet Getbulkfromdb_ds(string spname, List<SqlParameter> sp = null)
        {
            try
            {
                com = new SqlCommand(spname, con);
                com.CommandTimeout = 300;
                DataSet ds = new DataSet();
                com.CommandType = CommandType.StoredProcedure;
                if (sp != null)
                    com.Parameters.AddRange(sp.ToArray());
                da = new SqlDataAdapter(com);
                da.Fill(ds);
                return ds;
            }
            catch (Exception ex)
            {
                new LogHelper().LogError(ex.Message);
                return null;
            }
        }
        public int ExecuteSp_transaction(string StoredProcedureName, List<SqlParameter> sp = null)
        {
            try
            {
               
                con.Open();
                SqlCommand cmdProc = new SqlCommand(StoredProcedureName, con)
                {
                    CommandType = CommandType.StoredProcedure
                };
                SqlTransaction transaction;
                transaction = con.BeginTransaction("InsertTransaction"); 
                cmdProc.Transaction = transaction;
                if (sp != null)
                    cmdProc.Parameters.AddRange(sp.ToArray());
                try
                {
                    int r = cmdProc.ExecuteNonQuery();
                    // Attempt to commit the transaction.
                    transaction.Commit();
                    return (r);

                }
                catch (SqlException ex)
                {
                    new LogHelper().LogError(" Commit Exception Type: " + ex.GetType());
                    try
                    {
                        transaction.Rollback();
                    }
                    catch (Exception ex2)
                    {
                        new LogHelper().LogError("Rollback Exception Type: " + ex2.GetType());

                        new LogHelper().LogError(ex.Message);
                    }
                    if (ex.Number == 50000)
                    {
                        throw new InvalidOperationException(ex.Message);
                    }
                    return (0);
                }
                finally
                {
                    con.Close();
                }


            }
            catch (Exception ex)
            {
                new LogHelper().LogError(ex.Message);
                throw new InvalidOperationException(ex.Message);
             
            }


        }
        public async Task<int> ExecuteNonQueryAsync(string storedProcedureName, List<SqlParameter> parameters = null)
        {
            try
            {
                await con.OpenAsync();
                using (SqlCommand cmdProc = new SqlCommand(storedProcedureName, con))
                {
                    cmdProc.CommandType = CommandType.StoredProcedure;
                    SqlTransaction transaction = con.BeginTransaction("InsertTransaction");
                    cmdProc.Transaction = transaction;

                    if (parameters != null)
                    {
                        cmdProc.Parameters.AddRange(parameters.ToArray());
                    }

                    try
                    {
                        int result = await cmdProc.ExecuteNonQueryAsync();
                        transaction.Commit();
                        return result;
                    }
                    catch (Exception ex)
                    {
                        new LogHelper().LogError("Commit Exception Type: " + ex.GetType());
                        try
                        {
                            transaction.Rollback();
                        }
                        catch (Exception ex2)
                        {
                            new LogHelper().LogError("Rollback Exception Type: " + ex2.GetType());
                            new LogHelper().LogError(ex.Message);
                        }
                        return 0;
                    }
                    finally
                    {
                        await con.CloseAsync();
                    }
                }
            }
            catch (Exception ex)
            {
                new LogHelper().LogError(ex.Message);
                return 0;
            }
        }
        public void Execute_sp_with_result(string procedureName, List<SqlParameter> parameters)
        {
            try
            {
                using (SqlConnection connection = con)
                {
                    using (SqlCommand command = new SqlCommand(procedureName, connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        if (parameters != null)
                        {
                            command.Parameters.AddRange(parameters.ToArray());
                        }

                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                new LogHelper().LogError(ex.Message); 
                return;
            }
        }
    }
}
