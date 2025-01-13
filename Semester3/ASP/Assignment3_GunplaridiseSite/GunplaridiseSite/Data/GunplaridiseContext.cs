using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GunplaridiseSite.Models;

namespace GunplaridiseSite.Data
{
    public class GunplaridiseContext : DbContext
    {
        public GunplaridiseContext (DbContextOptions<GunplaridiseContext> options)
            : base(options)
        {
        }

        public DbSet<GunplaridiseSite.Models.Gunpla> Gunpla { get; set; } = default!;
        public DbSet<GunplaridiseSite.Models.Grade> Grade { get; set; } = default!;
    }
}
