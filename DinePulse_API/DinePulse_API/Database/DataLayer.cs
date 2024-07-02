using DinePulse_API.Utils;
using System.Data;
using System.Data.SqlClient;

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
            try
            {
                com = new SqlCommand(spname, con);
                com.CommandTimeout = 300;
                DataTable dt = new DataTable();
                com.CommandType = CommandType.StoredProcedure;
                if (sp != null)
                    com.Parameters.AddRange(sp.ToArray());
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
                transaction = con.BeginTransaction("InsertTransaction"); // Start a local transaction.
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
                catch (Exception ex)
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
                return (0);
            }


        }

    }
}
