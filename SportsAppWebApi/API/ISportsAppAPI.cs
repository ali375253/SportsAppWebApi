using Microsoft.AspNetCore.Mvc;
using SportsAppWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsAppWebApi.API
{
    interface ISportsAppAPI
    {
        IEnumerable<CooperTest> GetCooperTest();
        Task<ActionResult<int>> AddCooperTest(string description);
        IEnumerable<CooperTestDetail> GetCooperTestDetails();
        int Commit();
    }
}
