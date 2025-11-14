using Microsoft.EntityFrameworkCore;

namespace API.Models;

public class AppDataContext : DbContext
{
    public DbSet<Tarefa> Tarefas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=LohannaBieti.db");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Tarefa>().HasData(
            new Tarefa { TarefaId = "6a8b3e4d-5e4e-4f7e-bdc9-9181e456ad0e", Titulo = "Concluir relatório", CriadoEm = DateTime.Now.AddDays(7), Status = "Não iniciada" },
            new Tarefa { TarefaId = "2f1b7dc1-3b9a-4e1a-a389-7f5d2f1c8f3e", Titulo = "Estudar Angular", CriadoEm = DateTime.Now.AddDays(3), Status = "Não iniciada" },
            new Tarefa { TarefaId = "e5d4a7b9-1f9e-4c4a-ae3b-5b7c1a9d2e3f", Titulo = "Passeio no parque", CriadoEm = DateTime.Now.AddDays(14), Status = "Não iniciada" }
        );
    }
}
