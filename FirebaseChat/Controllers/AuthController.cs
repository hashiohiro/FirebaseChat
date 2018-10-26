using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FirebaseChat.Controllers
{
    public class AuthController : Controller
    {
        // GET: /<controller>/
        public IActionResult SignIn()
        {
            return View();
        }

        public IActionResult SignUp()
        {
            return View();
        }

        public IActionResult SignUpSuccess()
        {
            return Redirect("/Chat/Index");
        }

        public IActionResult SignInSuccess()
        {
            return Redirect("/Chat/Index");
        }
    }
}
