using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;


namespace ArtLocal.Models
{
    public class Artwork
    {
        [Key]
        public Guid ArtworkId { get; set; }

        [Required]
        [ForeignKey("ArtistId")]
        public Guid ArtistId { get; set; }
        public Artist? Artist { get; set; }

        [Required]
        public string? Title { get; set; }

        [Required]
        public string? Description { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

        [Required]
        public int Price { get; set; }

        [Required]
        public string? ImageLocation { get; set; }

        [Required]
        public bool Sold { get; set; }

        [Required]
        [ForeignKey("GalleryId")]
        public Guid GalleryId { get; set; }
        public Gallery? Gallery { get; set; }

        [Required]
        [ForeignKey("ArtStyleId")]
        public Guid ArtStyleId { get; set; }
        public ArtStyle? ArtStyle { get; set; }
    }
}
