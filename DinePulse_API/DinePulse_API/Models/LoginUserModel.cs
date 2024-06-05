namespace DinePulse_API.Models
{
    public class LoginUserModel
    {
        
            public string userName { get; set; }
            public string userPassword { get; set; }
        
       
    }
    public class AddUserModel
    {

        public string userName { get; set; }
        public string userPassword { get; set; }
        public string userType { get; set; }

    }
}
