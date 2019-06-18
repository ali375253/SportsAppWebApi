using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsAppWebApi.Models;

namespace SportsAppWebApi.API
{
    public class SportsAppAPI : ISportsAppAPI
    {
        public SportsAppAPI(SportsAppContext Sac)
        {
            this.Sac = Sac;
        }
        public Task<ActionResult<int>> AddCooperTest(string description)
        {
            throw new NotImplementedException();
        }

        public int Commit()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<CooperTest> GetCooperTest()
        {
            return from coopertest in Sac.CooperTests
                   select coopertest;
        }

        public IEnumerable<CooperTestDetail> GetCooperTestDetails()
        {
            throw new NotImplementedException();
        }

        private readonly SportsAppContext Sac;
    }
}
