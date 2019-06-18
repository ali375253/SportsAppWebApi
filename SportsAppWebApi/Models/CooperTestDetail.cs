using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsAppWebApi.Models
{
    public class CooperTestDetail
    {
        public int Id { get; set; }
        public int UsersId { get; set; }
        public string Result { get; set; }
        public int CooperTestId { get; set; }
    }
}
