using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LastAirbenderCollection.Models;

namespace LastAirbenderCollection.Data
{
    public class LastAirbenderCollectionContext : DbContext
    {
        public LastAirbenderCollectionContext (DbContextOptions<LastAirbenderCollectionContext> options)
            : base(options)
        {
        }

        public DbSet<LastAirbenderCollection.Models.Character> Character { get; set; } = default!;
        public DbSet<LastAirbenderCollection.Models.Category> Category { get; set; } = default!;
    }
}
