// Lexique événementiel curé. Vocabulaire de production technique, scénographie,
// audiovisuel, sécurité et logistique. Démontre l'expertise et donne aux clients
// le langage pour lire un devis. Bilingue FR/EN car le métier est international.
//
// Liste volontairement resserrée : termes indispensables et termes qui font la
// différence dans une lecture de devis. À étendre au fil des publications.

export type LexiqueEntry = {
  fr: string;
  en?: string;
  category: string;
  definition: string;
};

export const lexiqueCategories = [
  'Régie',
  'Audio',
  'Lumière',
  'Vidéo',
  'Structure',
  'Scénographie',
  'Sécurité',
  'Logistique',
  'Communication',
] as const;

export const lexique: LexiqueEntry[] = [
  // RÉGIE
  { fr: 'Régie générale', en: 'Show calling / Stage management', category: 'Régie', definition: 'Coordination opérationnelle de la conduite. Donne les tops, gère les transitions, arbitre les imprévus le jour J.' },
  { fr: 'Conduite', en: 'Show running order', category: 'Régie', definition: 'Document détaillant minute par minute le déroulé : entrées, sorties, tops son, tops lumière, vidéo, intervenants.' },
  { fr: 'Filage', en: 'Run-through', category: 'Régie', definition: 'Répétition complète enchaînée, du premier au dernier tableau, sans coupure. Permet de valider la fluidité de la conduite.' },
  { fr: 'Raccord', en: 'Cue-to-cue rehearsal', category: 'Régie', definition: 'Répétition focalisée sur les transitions entre tableaux, sans jouer le contenu de chaque scène.' },
  { fr: 'Top', en: 'Cue', category: 'Régie', definition: 'Signal donné par la régie pour déclencher une action technique : top son, top lumière, top vidéo, top entrée intervenant.' },
  { fr: 'Rétroplanning', en: 'Production schedule', category: 'Régie', definition: 'Calendrier inversé partant du jour J, listant les jalons techniques, les commandes, les répétitions, les livraisons.' },
  { fr: 'Ouvreur', en: 'Opener', category: 'Régie', definition: 'Personne ou intervention qui ouvre la plénière, donne le ton, pose le contexte avant l\'arrivée du dirigeant.' },
  { fr: 'Régie son', en: 'Sound desk / FOH', category: 'Régie', definition: 'Position du sondier en salle, généralement face à la scène en zone neutre acoustique. FOH = Front Of House.' },
  { fr: 'Régie lumière', en: 'Lighting desk', category: 'Régie', definition: 'Pupitre de pilotage des projecteurs. Programmation préalable des « cues » qui s\'enchaînent à la conduite.' },
  { fr: 'Régie vidéo', en: 'Video control', category: 'Régie', definition: 'Pilotage des sources vidéo (caméras, slides, vidéos préparées) vers les écrans et le mixeur de diffusion.' },

  // AUDIO
  { fr: 'Line array', en: 'Line array', category: 'Audio', definition: 'Système de diffusion son professionnel pour grandes jauges. Suspendu en gril, projection longue distance avec couverture homogène.' },
  { fr: 'Système front', en: 'Front of house system', category: 'Audio', definition: 'Diffusion son principale dirigée vers le public depuis la scène. Distinct du système retour des intervenants.' },
  { fr: 'Retour de scène', en: 'Stage monitor / Wedge', category: 'Audio', definition: 'Enceinte posée au sol face à un intervenant pour qu\'il s\'entende parler ou jouer. Évite l\'effet « voix dans le vide ».' },
  { fr: 'In-ear', en: 'IEM', category: 'Audio', definition: 'Oreillettes intra-auriculaires pour intervenants. Permet une conduite régie ↔ intervenant invisible et un retour son personnalisé.' },
  { fr: 'HF', en: 'Wireless / RF', category: 'Audio', definition: 'Micro sans fil. Demande coordination des fréquences et autorisation ARCEP en France pour les gros dispositifs.' },
  { fr: 'Micro cravate', en: 'Lavalier mic', category: 'Audio', definition: 'Petit micro fixé au revers ou au col. Discret, libère les mains. Demande HF émetteur et calibration.' },
  { fr: 'Micro casque', en: 'Headset mic', category: 'Audio', definition: 'Micro porté sur l\'oreille, micro contre la joue. Reste à distance constante de la bouche, idéal scène en mouvement.' },
  { fr: 'Patch', en: 'Patch list / Input list', category: 'Audio', definition: 'Liste détaillée des sources audio (micro 1 = lutrin, micro 2 = ouvreur, ligne ordi 1 = vidéo) avec affectation console.' },
  { fr: 'Calage acoustique', en: 'System tuning', category: 'Audio', definition: 'Réglage du système son en fonction de la salle (réverbération, points de couverture). Étape critique avant ouverture des portes.' },
  { fr: 'Larsen', en: 'Feedback', category: 'Audio', definition: 'Sifflement aigu causé par un micro qui capte le son de l\'enceinte. Évité par dimensionnement, position, EQ et écrêtage.' },
  { fr: 'Égaliseur', en: 'EQ', category: 'Audio', definition: 'Sculpture du spectre fréquentiel d\'une source ou d\'un système. Corrige les défauts de salle et la couleur des micros.' },
  { fr: 'Compresseur', en: 'Compressor', category: 'Audio', definition: 'Réducteur de dynamique. Empêche les pics et homogénéise un signal (voix, musique).' },
  { fr: 'Console numérique', en: 'Digital mixer', category: 'Audio', definition: 'Mixeur audio à pilotage digital. Permet rappel de scènes, automatisations, enregistrement multipiste.' },
  { fr: 'Enregistrement multipiste', en: 'Multitrack recording', category: 'Audio', definition: 'Captation séparée de chaque source son. Permet de remonter le son en post-production sans toucher au reste.' },

  // LUMIÈRE
  { fr: 'Pont lumière', en: 'Truss / Lighting bridge', category: 'Lumière', definition: 'Structure métallique horizontale supportant les projecteurs. Suspendue, posée sur stands ou intégrée à la scène.' },
  { fr: 'Lyre', en: 'Moving head', category: 'Lumière', definition: 'Projecteur asservi à mouvements motorisés (pan/tilt). Programmable pour effets de mouvement et changement de couleur.' },
  { fr: 'Découpe', en: 'Profile / Ellipsoidal', category: 'Lumière', definition: 'Projecteur permettant de découper un faisceau précis (forme rectangulaire, cercle). Utilisé pour les face d\'intervenants.' },
  { fr: 'PC', en: 'Plano-convex / Fresnel', category: 'Lumière', definition: 'Projecteur traditionnel à faisceau modulable. Lumière douce, cohérente, idéale pour les face de scène générales.' },
  { fr: 'Wash', en: 'Wash', category: 'Lumière', definition: 'Projecteur à faisceau large pour bain de couleur ambiance. Enveloppe la scène plutôt que de la souligner.' },
  { fr: 'Beam', en: 'Beam', category: 'Lumière', definition: 'Projecteur à faisceau extrêmement étroit et puissant. Effets de rayons traversant la salle, très visible en fumée.' },
  { fr: 'Face', en: 'Front light', category: 'Lumière', definition: 'Éclairage frontal des intervenants. Indispensable pour la captation vidéo et la lisibilité visuelle.' },
  { fr: 'Contre', en: 'Backlight', category: 'Lumière', definition: 'Éclairage venant de derrière la scène. Détache les silhouettes du fond, donne du relief.' },
  { fr: 'Latéral', en: 'Side light', category: 'Lumière', definition: 'Éclairage venant des côtés de la scène. Sculpte les volumes, idéal pour la danse et le spectacle vivant.' },
  { fr: 'Gobo', en: 'Gobo', category: 'Lumière', definition: 'Pochoir métallique placé dans un projecteur découpe pour projeter des motifs (logo entreprise, texture, forme).' },
  { fr: 'Conduite lumière', en: 'Lighting cue list', category: 'Lumière', definition: 'Suite d\'états lumineux pré-programmés enchaînés à la conduite. Chaque état = une scène, déclenchée au top.' },
  { fr: 'Plan de feu', en: 'Lighting plot', category: 'Lumière', definition: 'Plan technique listant chaque projecteur, sa position, son angle, sa puissance, son adressage DMX.' },
  { fr: 'DMX', en: 'DMX', category: 'Lumière', definition: 'Protocole de communication standard pour piloter les projecteurs depuis une console.' },

  // VIDÉO
  { fr: 'Écran LED', en: 'LED screen / LED wall', category: 'Vidéo', definition: 'Mur d\'image modulaire. Permet jauges importantes, formats personnalisés, fond de scène spectaculaire. Tarif au m².' },
  { fr: 'Pitch', en: 'Pixel pitch', category: 'Vidéo', definition: 'Distance entre deux LEDs sur un écran. Plus le pitch est petit (P2.5, P3.9), plus l\'image est nette de près.' },
  { fr: 'Vidéoprojecteur', en: 'Projector', category: 'Vidéo', definition: 'Diffusion image classique sur écran de projection. Tarif modéré, qualité fonction du lumen, sensible à la lumière ambiante.' },
  { fr: 'Lumen', en: 'Lumens', category: 'Vidéo', definition: 'Unité de puissance lumineuse d\'un vidéoprojecteur. 5 000 lumens = petite salle, 20 000+ lumens = grande salle.' },
  { fr: 'IMAG', en: 'IMAG', category: 'Vidéo', definition: 'Image Magnification : retransmission en direct des intervenants sur écran latéral. Indispensable au-delà de 200 personnes.' },
  { fr: 'Mire', en: 'Test pattern', category: 'Vidéo', definition: 'Image de référence pour calibrer les couleurs, la luminosité et la résolution des écrans avant le show.' },
  { fr: 'Slides', en: 'Slides', category: 'Vidéo', definition: 'Présentation type PowerPoint / Keynote diffusée sur les écrans. Format à recevoir au moins 48h avant pour vérification.' },
  { fr: 'Mixeur vidéo', en: 'Video switcher', category: 'Vidéo', definition: 'Console permettant de basculer entre plusieurs sources vidéo (caméras, slides) en direct, avec effets de transition.' },
  { fr: 'Backline vidéo', en: 'Video signal chain', category: 'Vidéo', definition: 'Chaîne de signal de la source à l\'écran : ordinateur, mixeur, scaler, distribution, écran. Chaque maillon est un risque.' },

  // STRUCTURE
  { fr: 'Gril', en: 'Truss grid', category: 'Structure', definition: 'Treillis métallique horizontal au-dessus de la scène, supportant les projecteurs et le matériel suspendu.' },
  { fr: 'Pont', en: 'Truss', category: 'Structure', definition: 'Structure métallique modulaire en aluminium. Sert au levage, à la suspension, à la délimitation scénique.' },
  { fr: 'Praticable', en: 'Stage deck', category: 'Structure', definition: 'Plateau de scène modulaire. Hauteur variable, charge admissible certifiée, finition tapis ou plancher.' },
  { fr: 'Skirt', en: 'Stage skirt / Drape', category: 'Structure', definition: 'Habillage tissu autour des praticables pour cacher les pieds et donner un aspect fini.' },
  { fr: 'Note de calcul', en: 'Structural calculation', category: 'Structure', definition: 'Document attestant que la structure tient les charges prévues. Obligatoire pour les structures importantes.' },
  { fr: 'CTS', en: 'CTS / Tent regulation', category: 'Structure', definition: 'Chapiteaux, Tentes et Structures. Réglementation française imposant un classement et un dossier sécurité spécifiques.' },
  { fr: 'Charge admissible', en: 'Working load limit', category: 'Structure', definition: 'Poids maximum que peut supporter une structure ou un point d\'ancrage. À ne jamais dépasser.' },
  { fr: 'Élingue', en: 'Sling', category: 'Structure', definition: 'Câble ou sangle de levage, certifié. Permet de suspendre la structure aux points d\'accroche du lieu.' },
  { fr: 'Manille', en: 'Shackle', category: 'Structure', definition: 'Pièce métallique en U fermée par un axe. Connecte une élingue à un point d\'accroche ou à une structure.' },
  { fr: 'Levage', en: 'Rigging', category: 'Structure', definition: 'Ensemble des opérations d\'accrochage et de suspension de matériel en hauteur. Métier sous habilitation.' },

  // SCÉNOGRAPHIE
  { fr: 'Scénographie', en: 'Set design', category: 'Scénographie', definition: 'Conception de l\'espace scénique : décor, lumière, couleurs, mobilier, signalétique. Donne l\'identité visuelle à l\'événement.' },
  { fr: 'Décor', en: 'Set / Backdrop', category: 'Scénographie', definition: 'Éléments construits installés sur ou autour de la scène. Bois, mousse rigide, tissu tendu, structure modulaire.' },
  { fr: 'Fond de scène', en: 'Backdrop', category: 'Scénographie', definition: 'Mur visuel derrière les intervenants. Tissu tendu, écran LED, surface de projection, décor construit.' },
  { fr: 'Plan de salle', en: 'Floor plan', category: 'Scénographie', definition: 'Plan vue de dessus de l\'aménagement : scène, public, mange-debout, espace cocktail, accès, issues.' },
  { fr: 'Modélisation 3D', en: '3D rendering', category: 'Scénographie', definition: 'Représentation tridimensionnelle de l\'événement avant production. Permet validation client et brief prestataires à l\'échelle.' },
  { fr: 'Filage scénographique', en: 'Walkthrough', category: 'Scénographie', definition: 'Visite du dispositif final juste avant l\'ouverture des portes. Vérification de chaque détail visuel.' },
  { fr: 'Habillage', en: 'Dressing', category: 'Scénographie', definition: 'Finitions tissu, peinture, vinyle qui transforment une structure brute en élément scénique.' },

  // SÉCURITÉ
  { fr: 'ERP', en: 'Public-receiving establishment', category: 'Sécurité', definition: 'Établissement Recevant du Public. Classification française (1 à 5) selon la jauge, type (L, M, etc.) selon l\'usage.' },
  { fr: 'SSIAP', en: 'Fire safety officer', category: 'Sécurité', definition: 'Service de Sécurité Incendie et d\'Assistance aux Personnes. Agent formé à la prévention et à l\'évacuation en ERP.' },
  { fr: 'Commissaire de sécurité', en: 'Safety commissioner', category: 'Sécurité', definition: 'Représentant officiel chargé de vérifier la conformité ERP avant l\'ouverture. Validation préalable obligatoire pour grosses jauges.' },
  { fr: 'PPSPS', en: 'Health & safety plan', category: 'Sécurité', definition: 'Plan Particulier de Sécurité et de Protection de la Santé. Obligatoire sur certains chantiers et installations événementielles.' },
  { fr: 'Plan de prévention', en: 'Prevention plan', category: 'Sécurité', definition: 'Document définissant les mesures de sécurité quand plusieurs entreprises interviennent simultanément sur un site.' },
  { fr: 'Issue de secours', en: 'Emergency exit', category: 'Sécurité', definition: 'Sortie balisée permettant l\'évacuation rapide. Nombre et largeur calculés selon la jauge ERP.' },
  { fr: 'Désenfumage', en: 'Smoke extraction', category: 'Sécurité', definition: 'Système d\'évacuation des fumées en cas d\'incendie. Obligatoire dans certains ERP, à ne pas obstruer.' },
  { fr: 'Évacuation', en: 'Evacuation', category: 'Sécurité', definition: 'Procédure d\'évacuation préparée à l\'avance, communiquée aux équipes, balisée par la signalétique de sécurité.' },
  { fr: 'Service d\'ordre', en: 'Order service', category: 'Sécurité', definition: 'Équipe gérant le contrôle d\'accès, le filtrage et la circulation des invités. Distinct des SSIAP.' },

  // LOGISTIQUE
  { fr: 'Loge', en: 'Green room', category: 'Logistique', definition: 'Espace privatif pour les intervenants : préparation, attente, repas. À équiper en miroirs, water et catering selon le besoin.' },
  { fr: 'Backstage', en: 'Backstage', category: 'Logistique', definition: 'Zone derrière la scène et hors public : régie, loges, stockage matériel, circulation prestataires.' },
  { fr: 'Catering équipe', en: 'Crew catering', category: 'Logistique', definition: 'Repas et boissons pour l\'équipe technique tout au long de la journée. Distinct du catering invités.' },
  { fr: 'Voyage marchandise', en: 'Freight', category: 'Logistique', definition: 'Transport du matériel de production. Camions à dimensionner selon le volume, accès quai à vérifier sur le lieu.' },
  { fr: 'Bloc hôtel', en: 'Hotel block', category: 'Logistique', definition: 'Réservation groupée de chambres pour les invités venus de loin. À négocier 4 à 6 mois en amont.' },
  { fr: 'Transfert', en: 'Shuttle / Transfer', category: 'Logistique', definition: 'Déplacement organisé entre points (gare → lieu, hôtel → soirée). Bus, navettes, taxis VIP.' },
  { fr: 'Émargement', en: 'Sign-in / Check-in', category: 'Logistique', definition: 'Liste de présence des invités à l\'arrivée. Plateforme dédiée, scan QR ou signature papier selon l\'enjeu.' },

  // COMMUNICATION
  { fr: 'Save the date', en: 'Save the date', category: 'Communication', definition: 'Pré-invitation envoyée 3 à 6 mois avant pour bloquer la date des invités. Précède l\'invitation officielle détaillée.' },
  { fr: 'Goodies', en: 'Swag', category: 'Communication', definition: 'Objets remis aux invités (kit, sac, accessoires). Choix entre utile et symbolique, à arbitrer selon le budget et le ton.' },
  { fr: 'Dossier de presse', en: 'Press kit', category: 'Communication', definition: 'Document remis aux journalistes, contenant communiqué, photos HD, biographies, messages clés.' },
  { fr: 'Recap film', en: 'Recap video', category: 'Communication', definition: 'Vidéo de 1 à 3 minutes synthétisant l\'événement, livrée dans la semaine pour usage interne et réseaux.' },
  { fr: 'Communiqué', en: 'Press release', category: 'Communication', definition: 'Texte officiel envoyé à la presse, sous embargo ou en libre diffusion, juste avant ou après l\'événement.' },
  { fr: 'Hashtag événement', en: 'Event hashtag', category: 'Communication', definition: 'Marqueur unique sur les réseaux sociaux pour fédérer les contenus partagés autour de l\'événement.' },
  { fr: 'Live tweet', en: 'Live tweet', category: 'Communication', definition: 'Animation en direct des comptes sociaux pendant l\'événement. Demande un community manager dédié.' },
  { fr: 'Capsule', en: 'Capsule / Snippet', category: 'Communication', definition: 'Module vidéo court (15 à 60 secondes) extrait de la captation, formaté pour diffusion réseaux sociaux.' },
];
