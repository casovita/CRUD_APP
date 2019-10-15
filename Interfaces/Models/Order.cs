using System.ComponentModel.DataAnnotations;

namespace Domain.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Amount { get; set; }
    }
}
