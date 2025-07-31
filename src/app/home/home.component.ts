import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  LandingCarosalData = [
    {
      TempleImage: "/assets/images/Carousel_image.png",
      location: "Chennai",
      title: "KabaleshwarTemple",
      description: "KabaleshwarTemple temple is one of the prominent Shiva temples in India situated in Mylapore, Chennai. Here Lord Shiva is worshipped as Kapaleeswar [self-manifested]  "
    },
    {
      TempleImage: "/assets/images/Carousel_image.png",
      location: "Madurai",
      title: "Meenachi Amman Temple",
      description: "Arulmigu Meenakshi Sundareswarar Temple, also known as Arulmigu Meenakshi Amman Thirukkovil, is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai."
    }
  ]

  ListTemplaData = [
    {
      image: "/assets/images/somnath.png",
      location: "Gujarat",
      title: "Somnath Temple",
      description: "Located in Prabhas Patan, Gujarat, Somnath Temple is one of the twelve sacred Jyotirlinga shrines dedicated to Lord Shiva. It holds immense spiritual significance and has been reconstructed several times throughout history."
    },
    {
      image: "/assets/images/amristar.png",
      location: "Amritsar",
      title: "Golden Temple",
      description: "The Golden Temple, or Harmandir Sahib, is the most important pilgrimage site of Sikhism. Located in Amritsar, Punjab, it is known for its serene architecture and the holy Amrit Sarovar surrounding it."
    },
    {
      image: "/assets/images/Madurai.png",
      location: "Madurai",
      title: "Meenakshi Temple",
      description: "Situated on the southern bank of the Vaigai River in Madurai, Tamil Nadu, Meenakshi Temple is dedicated to Goddess Meenakshi (a form of Parvati) and Lord Sundareswarar (Shiva). The temple is famous for its towering gopurams and intricate sculptures."
    },
    {
      image: "/assets/images/kaasi.png",
      location: "Varanasi",
      title: "Kasi Vishwanath Temple",
      description: "Kasi Vishwanath Temple in Varanasi, Uttar Pradesh, is one of the holiest Shiva temples. Located on the banks of the Ganga, it is one of the twelve Jyotirlingas and is central to the spiritual heritage of India."
    },
    {
      image: "/assets/images/katra.png",
      location: "Katra",
      title: "Vaishno Devi Temple",
      description: "Situated in the Trikuta Mountains of Jammu and Kashmir, Vaishno Devi Temple is a revered shrine dedicated to Goddess Vaishno Devi. Pilgrims undertake a 13-kilometer trek to reach the holy cave."
    },
    {
      image: "/assets/images/Delhi.png",
      location: "New Delhi",
      title: "Akshardham Temple",
      description: "Swaminarayan Akshardham in New Delhi showcases the rich cultural and spiritual heritage of India. It features intricate carvings, exhibitions, musical fountains, and an awe-inspiring central monument."
    },
    {
      image: "/assets/images/Tanjore.png",
      location: "Tanjore",
      title: "Brihadeeswarar Temple",
      description: "Located in Thanjavur, Tamil Nadu, Brihadeeswarar Temple is a UNESCO World Heritage Site and a brilliant example of Chola architecture. It is dedicated to Lord Shiva and features a towering vimana over the sanctum."
    },
    {
      image: "/assets/images/tirumala.png",
      location: "Tirumala",
      title: "Tirupati Balaji Temple",
      description: "Located in Tirumala, Andhra Pradesh, Tirupati Balaji Temple is dedicated to Lord Venkateswara (a form of Vishnu). It is one of the richest and most visited temples in the world."
    },
    {
      image: "/assets/images/puri.png",
      location: "Puri",
      title: "Jagannath Temple",
      description: "Located in Puri, Odisha, the Jagannath Temple is one of the Char Dham pilgrimage sites. It is dedicated to Lord Jagannath (a form of Krishna) and is renowned for its annual Rath Yatra, where the deities are taken out in massive chariots."
    },

    {
      image: "/assets/images/somnath.png",
      location: "Gujarat",
      title: "Somnath Temple",
      description: "Located in Prabhas Patan, Gujarat, Somnath Temple is one of the twelve sacred Jyotirlinga shrines dedicated to Lord Shiva. It holds immense spiritual significance and has been reconstructed several times throughout history."
    },
    {
      image: "/assets/images/amristar.png",
      location: "Amritsar",
      title: "Golden Temple",
      description: "The Golden Temple, or Harmandir Sahib, is the most important pilgrimage site of Sikhism. Located in Amritsar, Punjab, it is known for its serene architecture and the holy Amrit Sarovar surrounding it."
    },
    {
      image: "/assets/images/Madurai.png",
      location: "Madurai",
      title: "Meenakshi Temple",
      description: "Situated on the southern bank of the Vaigai River in Madurai, Tamil Nadu, Meenakshi Temple is dedicated to Goddess Meenakshi (a form of Parvati) and Lord Sundareswarar (Shiva). The temple is famous for its towering gopurams and intricate sculptures."
    },
    {
      image: "/assets/images/kaasi.png",
      location: "Varanasi",
      title: "Kasi Vishwanath Temple",
      description: "Kasi Vishwanath Temple in Varanasi, Uttar Pradesh, is one of the holiest Shiva temples. Located on the banks of the Ganga, it is one of the twelve Jyotirlingas and is central to the spiritual heritage of India."
    },
    {
      image: "/assets/images/katra.png",
      location: "Katra",
      title: "Vaishno Devi Temple",
      description: "Situated in the Trikuta Mountains of Jammu and Kashmir, Vaishno Devi Temple is a revered shrine dedicated to Goddess Vaishno Devi. Pilgrims undertake a 13-kilometer trek to reach the holy cave."
    },
    {
      image: "/assets/images/Delhi.png",
      location: "New Delhi",
      title: "Akshardham Temple",
      description: "Swaminarayan Akshardham in New Delhi showcases the rich cultural and spiritual heritage of India. It features intricate carvings, exhibitions, musical fountains, and an awe-inspiring central monument."
    },
    {
      image: "/assets/images/Tanjore.png",
      location: "Tanjore",
      title: "Brihadeeswarar Temple",
      description: "Located in Thanjavur, Tamil Nadu, Brihadeeswarar Temple is a UNESCO World Heritage Site and a brilliant example of Chola architecture. It is dedicated to Lord Shiva and features a towering vimana over the sanctum."
    },
    {
      image: "/assets/images/tirumala.png",
      location: "Tirumala",
      title: "Tirupati Balaji Temple",
      description: "Located in Tirumala, Andhra Pradesh, Tirupati Balaji Temple is dedicated to Lord Venkateswara (a form of Vishnu). It is one of the richest and most visited temples in the world."
    },
    {
      image: "/assets/images/puri.png",
      location: "Puri",
      title: "Jagannath Temple",
      description: "Located in Puri, Odisha, the Jagannath Temple is one of the Char Dham pilgrimage sites. It is dedicated to Lord Jagannath (a form of Krishna) and is renowned for its annual Rath Yatra, where the deities are taken out in massive chariots."
    },

    {
      image: "/assets/images/somnath.png",
      location: "Gujarat",
      title: "Somnath Temple",
      description: "Located in Prabhas Patan, Gujarat, Somnath Temple is one of the twelve sacred Jyotirlinga shrines dedicated to Lord Shiva. It holds immense spiritual significance and has been reconstructed several times throughout history."
    },
    {
      image: "/assets/images/amristar.png",
      location: "Amritsar",
      title: "Golden Temple",
      description: "The Golden Temple, or Harmandir Sahib, is the most important pilgrimage site of Sikhism. Located in Amritsar, Punjab, it is known for its serene architecture and the holy Amrit Sarovar surrounding it."
    },
    {
      image: "/assets/images/Madurai.png",
      location: "Madurai",
      title: "Meenakshi Temple",
      description: "Situated on the southern bank of the Vaigai River in Madurai, Tamil Nadu, Meenakshi Temple is dedicated to Goddess Meenakshi (a form of Parvati) and Lord Sundareswarar (Shiva). The temple is famous for its towering gopurams and intricate sculptures."
    },
    {
      image: "/assets/images/kaasi.png",
      location: "Varanasi",
      title: "Kasi Vishwanath Temple",
      description: "Kasi Vishwanath Temple in Varanasi, Uttar Pradesh, is one of the holiest Shiva temples. Located on the banks of the Ganga, it is one of the twelve Jyotirlingas and is central to the spiritual heritage of India."
    },
    {
      image: "/assets/images/katra.png",
      location: "Katra",
      title: "Vaishno Devi Temple",
      description: "Situated in the Trikuta Mountains of Jammu and Kashmir, Vaishno Devi Temple is a revered shrine dedicated to Goddess Vaishno Devi. Pilgrims undertake a 13-kilometer trek to reach the holy cave."
    },
    {
      image: "/assets/images/Delhi.png",
      location: "New Delhi",
      title: "Akshardham Temple",
      description: "Swaminarayan Akshardham in New Delhi showcases the rich cultural and spiritual heritage of India. It features intricate carvings, exhibitions, musical fountains, and an awe-inspiring central monument."
    },
    {
      image: "/assets/images/Tanjore.png",
      location: "Tanjore",
      title: "Brihadeeswarar Temple",
      description: "Located in Thanjavur, Tamil Nadu, Brihadeeswarar Temple is a UNESCO World Heritage Site and a brilliant example of Chola architecture. It is dedicated to Lord Shiva and features a towering vimana over the sanctum."
    },
    {
      image: "/assets/images/tirumala.png",
      location: "Tirumala",
      title: "Tirupati Balaji Temple",
      description: "Located in Tirumala, Andhra Pradesh, Tirupati Balaji Temple is dedicated to Lord Venkateswara (a form of Vishnu). It is one of the richest and most visited temples in the world."
    },
    {
      image: "/assets/images/puri.png",
      location: "Puri",
      title: "Jagannath Temple",
      description: "Located in Puri, Odisha, the Jagannath Temple is one of the Char Dham pilgrimage sites. It is dedicated to Lord Jagannath (a form of Krishna) and is renowned for its annual Rath Yatra, where the deities are taken out in massive chariots."
    },
    {
      image: "/assets/images/somnath.png",
      location: "Gujarat",
      title: "Somnath Temple",
      description: "Located in Prabhas Patan, Gujarat, Somnath Temple is one of the twelve sacred Jyotirlinga shrines dedicated to Lord Shiva. It holds immense spiritual significance and has been reconstructed several times throughout history."
    },
    {
      image: "/assets/images/amristar.png",
      location: "Amritsar",
      title: "Golden Temple",
      description: "The Golden Temple, or Harmandir Sahib, is the most important pilgrimage site of Sikhism. Located in Amritsar, Punjab, it is known for its serene architecture and the holy Amrit Sarovar surrounding it."
    },
    {
      image: "/assets/images/Madurai.png",
      location: "Madurai",
      title: "Meenakshi Temple",
      description: "Situated on the southern bank of the Vaigai River in Madurai, Tamil Nadu, Meenakshi Temple is dedicated to Goddess Meenakshi (a form of Parvati) and Lord Sundareswarar (Shiva). The temple is famous for its towering gopurams and intricate sculptures."
    },
    {
      image: "/assets/images/kaasi.png",
      location: "Varanasi",
      title: "Kasi Vishwanath Temple",
      description: "Kasi Vishwanath Temple in Varanasi, Uttar Pradesh, is one of the holiest Shiva temples. Located on the banks of the Ganga, it is one of the twelve Jyotirlingas and is central to the spiritual heritage of India."
    },
    {
      image: "/assets/images/katra.png",
      location: "Katra",
      title: "Vaishno Devi Temple",
      description: "Situated in the Trikuta Mountains of Jammu and Kashmir, Vaishno Devi Temple is a revered shrine dedicated to Goddess Vaishno Devi. Pilgrims undertake a 13-kilometer trek to reach the holy cave."
    },
    {
      image: "/assets/images/Delhi.png",
      location: "New Delhi",
      title: "Akshardham Temple",
      description: "Swaminarayan Akshardham in New Delhi showcases the rich cultural and spiritual heritage of India. It features intricate carvings, exhibitions, musical fountains, and an awe-inspiring central monument."
    },
    {
      image: "/assets/images/Tanjore.png",
      location: "Tanjore",
      title: "Brihadeeswarar Temple",
      description: "Located in Thanjavur, Tamil Nadu, Brihadeeswarar Temple is a UNESCO World Heritage Site and a brilliant example of Chola architecture. It is dedicated to Lord Shiva and features a towering vimana over the sanctum."
    },
    {
      image: "/assets/images/tirumala.png",
      location: "Tirumala",
      title: "Tirupati Balaji Temple",
      description: "Located in Tirumala, Andhra Pradesh, Tirupati Balaji Temple is dedicated to Lord Venkateswara (a form of Vishnu). It is one of the richest and most visited temples in the world."
    },
    {
      image: "/assets/images/puri.png",
      location: "Puri",
      title: "Jagannath Temple",
      description: "Located in Puri, Odisha, the Jagannath Temple is one of the Char Dham pilgrimage sites. It is dedicated to Lord Jagannath (a form of Krishna) and is renowned for its annual Rath Yatra, where the deities are taken out in massive chariots."
    }

  ];

  Location = [
    {
      heading: "Location",
      names: [
        "Maharashtra",
        "Tamil Nadu",
        "Kerala",
        "Karnataka",
        "Gujarat",
        "Rajasthan",
        "Punjab",
        "Bihar",
        "Uttar Pradesh",
        "West Bengal"
      ]
    },
    {
      heading: "Mission",
      names: [
        "Preserve Ancient Temples",
        "Temple Cleanliness Drive",
        "Digitization of Temple Records",
        "Promote Temple Tourism",
        "Revive Temple Arts and Culture",
        "Eco-Friendly Temple Practices",
        "Heritage Temple Restoration",
        "Temple Safety and Security Program",
        "Traditional Festival Revival",
        "Temple Volunteer Movement"
      ]
    },

    {
  heading: "Deity",
  names: [
    "Lord Shiva",
    "Lord Vishnu",
    "Lord Ganesha",
    "Goddess Lakshmi",
    "Goddess Durga",
    "Lord Murugan",
    "Lord Rama",
    "Lord Krishna",
    "Goddess Saraswati",
    "Hanuman"
  ]
}

  ]
}
