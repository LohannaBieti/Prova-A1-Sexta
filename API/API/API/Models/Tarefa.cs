namespace API.Models;

public class Tarefa
{
    public string TarefaId { get; set; } = Guid.NewGuid().ToString();
    public string? Titulo { get; set; }
    public DateTime CriadoEm { get; set; } = DateTime.Now;
    public string? Status { get; set; } = "Não iniciada";
}
