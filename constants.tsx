import { ArtPiece } from './types';

export const STUDIO_CONFIG = {
  artistName: "Bespoke Art",
  studioLocation: "Ottawa, Ontario",
  footerText: "Defining the atmosphere through luminous architecture. Designed in Ottawa, curated for the intentional collector.",
  instagramLink: "#",
  inquiryEmail: "studio@bespokeart.ca",
  heroVideoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=729731c360668b81372b7e192534f18b3e83921e&profile_id=164&oauth2_token_id=57447761",
  processVideoUrl: "https://player.vimeo.com/external/459389137.sd.mp4?s=974497e684074c5d3936637373f72813158c3501&profile_id=164&oauth2_token_id=57447761"
};

export const ART_PIECES: ArtPiece[] = [
  ...[
    { title: "Dominion", price: "$2,400", dim: "36\" x 48\"", img: "https://images.unsplash.com/photo-1615184643328-360e7e78112d", avail: true },
    { title: "The Standard", price: "$1,200", dim: "24\" x 24\"", img: "https://images.unsplash.com/photo-1549490349-8643362247b5", avail: true },
    { title: "Iron Will", price: "$4,800", dim: "48\" x 60\"", img: "https://images.unsplash.com/photo-1554188248-986adbb73be4", avail: false },
    { title: "Core", price: "$2,100", dim: "30\" x 30\"", img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9", avail: true },
    { title: "Void", price: "$3,200", dim: "40\" x 40\"", img: "https://images.unsplash.com/photo-1613915611249-13c582300d4d", avail: true },
  ].map((item, i) => ({
    id: `e1-${i}`,
    title: item.title,
    dimensions: item.dim,
    price: item.price,
    imageUrl: `${item.img}?auto=format&fit=crop&q=80&w=1200`,
    description: 'A study in material depth and the strategic use of shadow.',
    isAvailable: item.avail,
    edition: 'Edition I'
  })),

  ...[
    "https://images.unsplash.com/photo-1515542706656-8e6ef17a2569",
    "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310",
    "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    "https://images.unsplash.com/photo-1518005020480-10f4d17665b0",
  ].map((img, i) => ({
    id: `arc-${i}`,
    title: `Study 0${i + 1}`,
    dimensions: 'Variable',
    imageUrl: `${img}?auto=format&fit=crop&q=80&w=1200`,
    description: 'Archived foundation work.',
    isAvailable: false,
    edition: 'Archived'
  }))
];