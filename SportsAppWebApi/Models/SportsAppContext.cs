using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsAppWebApi.Models
{
    public class SportsAppContext : DbContext
    {
        public SportsAppContext(DbContextOptions<SportsAppContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<CooperTest> CooperTests { get; set; }
        public DbSet<CooperTestDetail> CooperTestDetails { get; set; }
    }
}
