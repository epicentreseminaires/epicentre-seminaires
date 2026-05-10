// Formats : ce qu'on produit en clé en main, et ce qu'on oriente vers d'autres.
//
// Deux familles distinctes :
// - « on fait » : production complète, périmètre de niche d'Epicentre.
// - « on oriente » : on ne produit pas mais on connaît qui le fait bien. Service
//   public et SEO complémentaire : on capture les requêtes même quand on ne
//   produit pas, en orientant honnêtement vers le bon interlocuteur.

import type { IconKey } from './carnet';

export type FormatType = 'on-fait' | 'on-oriente';

export type FormatEntry = {
  slug: string;
  type: FormatType;
  shortLabel: string;
  cardLabel: string;
  iconKey: IconKey;
  title: string;
  metaDescription: string;
  intro: string;
  /** URL d'une image cinéma 21:9 affichée en hero de la fiche format. Optionnel. */
  cover?: string;
  // Pour les formats « on fait »
  definition?: string;
  method?: { title: string; desc: string }[];
  dispositif?: { label: string; desc: string }[];
  schedule?: { time: string; label: string; desc?: string }[];
  budgetRange?: string;
  relatedCarnet?: string[];
  // Pour les formats « on oriente »
  whyNotUs?: string;
  bestApproach?: string;
  whoToCall?: string;
};

export const formats: FormatEntry[] = [
  // ============================================================
  // CE QU'ON FAIT
  // ============================================================
  {
    slug: 'pleniere-entreprise',
    type: 'on-fait',
    shortLabel: 'Conférence',
    cardLabel: 'Conférence, congrès, plénière',
    iconKey: 'scene',
    title: 'Conférence, congrès, plénière d\'entreprise : production scénographiée',
    metaDescription: 'Conférence, congrès, plénière d\'entreprise : scène, son, lumière, vidéo, IMAG. Production complète Plaine de l\'Ain, Lyon, Genève.',
    intro: 'Conférence, congrès et plénière partagent une mécanique : un public assis, une scène, des intervenants, un message qui doit porter. Le dispositif change avec la jauge et la durée, mais l\'exigence reste la même : scénographie tenue, intelligibilité son, lumière qui sert le propos. C\'est la production technique qui fait la différence entre un message qui marque et un qui s\'oublie.',
    cover: 'https://enjoylife.b-cdn.net/Epicentre/congres.jpg',
    definition: 'Format réunissant un public assis face à une scène. Conférence : intervenants ciblés, durée 2 à 4 heures, 100 à 800 personnes. Plénière : moment fort intégré à un séminaire ou une convention, 200 à 1 500 personnes. Congrès : multi-jours, intervenants multiples, ateliers parallèles, 300 à 2 000 personnes. La logique de production technique se calque sur la jauge réelle et le format prévu.',
    method: [
      { title: 'Cadrage du dispositif', desc: 'Jauge, durée, format de prise de parole, intervenants, message clé. On dimensionne le dispositif à l\'enjeu, pas l\'inverse.' },
      { title: 'Scénographie 3D', desc: 'Plan scène, fond de scène, IMAG, lumière, mobilier modélisés à l\'échelle avant signature. Le client voit son événement avant qu\'il ait lieu.' },
      { title: 'Production technique', desc: 'Sourcing son, lumière, vidéo, structure dans notre carnet. Équipement nommé sur le devis, équipe identifiée par rôle.' },
      { title: 'Conduite et régie', desc: 'Filage et raccord en amont, régie générale le jour J. Tops calés, transitions fluides, plans B documentés.' },
    ],
    dispositif: [
      { label: 'Scène', desc: 'Praticables modulaires, gril lumière calculé à la charge, fond de scène tendu ou écran LED selon l\'enjeu.' },
      { label: 'Son', desc: 'Système front line array dimensionné à la jauge, micros HF intervenants, IEM ou retours, console numérique.' },
      { label: 'Lumière', desc: 'Face découpe pour intervenants, contre, latéraux, lyres pour effets, conduite pré-programmée.' },
      { label: 'Vidéo', desc: 'IMAG (retransmission intervenants), slides, lecture vidéo, écrans LED ou vidéoprojection selon le contexte.' },
      { label: 'Captation', desc: 'Multicam pour la grande jauge, captation directe régie son. Livrables best-of et intégrale post-événement.' },
      { label: 'Régie', desc: 'Régie son, régie lumière, régie vidéo, régie générale qui synchronise. Une équipe par rôle, pas de polyvalence sur les enjeux.' },
    ],
    schedule: [
      { time: 'J-1', label: 'Montage', desc: 'Structure, son, lumière, vidéo. Calage acoustique, programmation lumière.' },
      { time: 'J 8h', label: 'Filage technique', desc: 'Filage régie complet, raccord transitions, ajustements derniers.' },
      { time: 'J 9h30', label: 'Filage intervenants', desc: 'Passage de chaque intervenant sur scène. Familiarisation micro, slides, mouvements.' },
      { time: 'J 13h30', label: 'Ouverture portes', desc: 'Service hôtesses, accueil café, contrôle accès.' },
      { time: 'J 14h', label: 'Plénière', desc: 'Conduite à la régie, captation live, ajustements en temps réel.' },
      { time: 'J 17h', label: 'Cocktail / clôture', desc: 'Transition douce vers le format suivant ou clôture officielle.' },
      { time: 'J+1', label: 'Démontage', desc: 'Restitution lieu, décompte matériel, remontée des captations en post-production.' },
    ],
    budgetRange: 'Plénière 100 personnes : 8 000 à 18 000 € HT en production technique. Plénière 300 personnes : 25 000 à 50 000 € HT. Convention 800 personnes scénographiée : 60 000 à 150 000 € HT.',
    relatedCarnet: ['scene', 'son-lumiere', 'captation', 'lieu'],
  },
  {
    slug: 'gala-entreprise',
    type: 'on-fait',
    shortLabel: 'Soirée',
    cardLabel: 'Soirée d\'entreprise & remise de prix',
    iconKey: 'animation',
    title: 'Soirée d\'entreprise & remise de prix : dîner assis scénographié',
    metaDescription: 'Soirée d\'entreprise, gala, remise de prix : dîner assis scénographié, scène, animation, captation. Production complète Plaine de l\'Ain et région lyonnaise.',
    intro: 'La soirée d\'entreprise est un format de récompense, de rassemblement, de moment fort. Dîner assis, scénographie de salle, remise de prix, animation, prise de parole. La frontière entre un simple dîner et une soirée mémorable tient à l\'attention portée aux détails scénographiques et à la fluidité du déroulé. Format souvent enchaîné après une journée de conférence ou de congrès.',
    cover: 'https://enjoylife.b-cdn.net/Epicentre/epicentre-villieu.jpg',
    definition: 'Dîner d\'entreprise avec programme scénique : prises de parole, remises de prix, animation, parfois show. Cible : 100 à 1 200 personnes. Lieu privatisé (château, hôtel, salle des fêtes communale, lieu d\'exception) ou salle aménagée. Durée typique : 4 à 6 heures. Format souvent combiné en clôture d\'une conférence, d\'un congrès ou d\'un événement de recrutement.',
    method: [
      { title: 'Direction scénographique', desc: 'Identité visuelle dédiée : palette couleurs, mobilier, fleurissement, éclairage ambiance, fond de scène. Le gala se vit dans une atmosphère.' },
      { title: 'Production scène', desc: 'Scène dimensionnée au format des prises de parole et des éventuels artistes. Son et lumière calibrés pour l\'intelligibilité ET l\'ambiance.' },
      { title: 'Conduite serrée', desc: 'Chaque tableau (entrée, prise de parole, remise de prix, intermède artistique, dessert, danse) calé minute par minute pour éviter les temps morts.' },
      { title: 'Coordination traiteur', desc: 'Service maîtrisé sur la jauge : timing entrées-plats, gestion régimes, fluidité service. Le rythme culinaire structure la soirée.' },
    ],
    dispositif: [
      { label: 'Scène & fond de scène', desc: 'Praticables, fond tissu tendu ou écran LED, vidéos d\'intronisation pour remises de prix, mise en lumière dédiée.' },
      { label: 'Son ambiance et scène', desc: 'Diffusion ambiance pendant le dîner, bascule plein régime pour prises de parole et set DJ ou live band en clôture.' },
      { label: 'Lumière atmosphérique', desc: 'Lustres ou suspensions décoratives, projecteurs d\'ambiance teintés, gobos logo, transitions douces entre les tableaux.' },
      { label: 'Mobilier & décor', desc: 'Tables rondes ou en chevron, nappage, art de la table, centres de table, mange-debout cocktail. Coordination avec scénographie.' },
      { label: 'Animation', desc: 'Maître de cérémonie, intermède artistique, vidéos, DJ set ou groupe live. Voir fiche animation pour les critères de sélection.' },
      { label: 'Captation', desc: 'Photographe événementiel, photobooth optionnel, vidéaste pour recap film. Livrables sous une semaine.' },
    ],
    budgetRange: 'Gala 150 personnes : 35 000 à 80 000 € HT (production + scénographie + animation, hors traiteur). Gala 500 personnes scénographié : 150 000 à 400 000 € HT.',
    relatedCarnet: ['traiteur', 'animation', 'mobilier', 'son-lumiere', 'photobooth'],
  },
  {
    slug: 'lancement-produit',
    type: 'on-fait',
    shortLabel: 'Lancement',
    cardLabel: 'Lancement de produit',
    iconKey: 'captation',
    title: 'Lancement de produit : reveal scénographié + presse',
    metaDescription: 'Lancement de produit en entreprise : reveal scénographié, dispositif presse, captation, communication. Production complète et coordination.',
    intro: 'Le lancement de produit est un événement à enjeu communication maximum. Le reveal doit produire un effet visuel marquant, le dispositif presse doit garantir la diffusion, la captation doit nourrir la communication digitale post-événement. Chaque détail sert le récit.',
    definition: 'Événement dévoilant un nouveau produit, service ou marque, en interne (équipes, distributeurs) ou en externe (presse, clients, partenaires). Cible : 100 à 800 personnes. Format typique : moment d\'attente, prise de parole, reveal scénique, démonstration, cocktail networking.',
    method: [
      { title: 'Architecture du reveal', desc: 'Le moment du dévoilement est conçu en amont : effet lumière, vidéo, son, parfois scénographie mécanique. C\'est le pic émotionnel de l\'événement.' },
      { title: 'Dispositif presse', desc: 'Espace presse dédié, dossier de presse, photos HD, disponibilité des dirigeants pour interviews, embargo et timing diffusion.' },
      { title: 'Captation et live', desc: 'Multicam pour archive, capsules courtes pour réseaux le jour même, streaming live possible pour audience distante.' },
      { title: 'Communication post-event', desc: 'Recap film, communiqué post-event, capsules réseaux, page bilan. L\'événement nourrit la com pendant les semaines qui suivent.' },
    ],
    dispositif: [
      { label: 'Scène & dispositif reveal', desc: 'Scène scénographiée avec dispositif de dévoilement : rideau, projection mapping, mise en lumière instantanée, mécanique scénique selon ambition.' },
      { label: 'Vidéo signature', desc: 'Film de teaser, vidéo de présentation, contenu reveal. Production en amont avec direction artistique cohérente avec l\'événement.' },
      { label: 'Espace produit', desc: 'Showroom dédié au produit, démonstrations, possibilité de manipulation, mise en lumière scénographique.' },
      { label: 'Dispositif presse', desc: 'Espace interview, fond presse logoté, dossier de presse imprimé et numérique, photographe officiel pour photos diffusables.' },
      { label: 'Cocktail networking', desc: 'Pour favoriser les échanges post-reveal. Format mange-debout généralement, avec service homogène.' },
      { label: 'Captation multicam et streaming', desc: 'Voir fiche captation. Le contenu produit ici sert pendant 6 à 12 mois en com.' },
    ],
    budgetRange: 'Lancement interne 100 personnes : 25 000 à 60 000 € HT. Lancement presse + clients 300 personnes scénographié : 80 000 à 250 000 € HT. Lancement majeur avec mapping et show : 300 000 € HT et plus.',
    relatedCarnet: ['captation', 'scene', 'communication', 'photobooth', 'son-lumiere'],
  },
  {
    slug: 'inauguration-site',
    type: 'on-fait',
    shortLabel: 'Inauguration',
    cardLabel: 'Inauguration de site',
    iconKey: 'logistique',
    title: 'Inauguration de site industriel ou de bâtiment',
    metaDescription: 'Inauguration de site industriel, livraison de bâtiment : discours officiel, presse, captation, cocktail. Coordination ERP et sécurité.',
    intro: 'L\'inauguration combine un dispositif événementiel et des contraintes industrielles. Site en activité, normes sécurité spécifiques, présence officielle (élus, presse, dirigeants), invités venus de loin. Le pilotage exige une expérience croisée du métier événementiel et du milieu industriel.',
    cover: 'https://enjoylife.b-cdn.net/Epicentre/inauguration-plainedel%27ain.jpg',
    definition: 'Cérémonie officielle marquant l\'ouverture, l\'agrandissement ou la livraison d\'un site (usine, plateforme logistique, bâtiment institutionnel). Cible : 100 à 600 personnes. Présence fréquente d\'élus locaux et nationaux, de la presse, des partenaires économiques.',
    method: [
      { title: 'Coordination industrielle', desc: 'Plan de prévention rédigé, coordination HSE avec le site, accès véhicule, parcours visiteurs sécurisé, EPI selon les zones.' },
      { title: 'Protocole officiel', desc: 'Ordre des prises de parole, gestion des élus, dispositif presse, photos officielles, relations institutionnelles.' },
      { title: 'Scénographie sur site', desc: 'Adaptation à l\'environnement industriel : structure tente CTS si extérieur, scène mobile, éclairage industriel maîtrisé, sonorisation grandes distances.' },
      { title: 'Dispositif visite', desc: 'Parcours guidé du site, animateurs techniques formés au discours, signalétique de sécurité, gestion du flux invités.' },
    ],
    dispositif: [
      { label: 'Espace cérémonie', desc: 'Tente CTS ou hall industriel équipé, scène modulaire, son adapté à l\'acoustique du lieu (souvent réverbérant).' },
      { label: 'Visite de site', desc: 'Parcours sécurisé, panneaux explicatifs, animateurs techniques, contrôle d\'accès aux zones sensibles.' },
      { label: 'Presse et captation', desc: 'Zone presse dédiée, photographe officiel, photos diffusables sous 24h, captation des prises de parole.' },
      { label: 'Cocktail', desc: 'Espace traiteur abrité, traiteur formé aux contraintes industrielles (hygiène alimentaire, accès véhicule).' },
      { label: 'Sécurité', desc: 'Service d\'ordre, contrôle d\'accès invités, coordination avec la sécurité industrielle du site.' },
      { label: 'Logistique', desc: 'Parking dimensionné, navette depuis gare ou hôtel pour les invités venus de loin, accueil multilingue selon le contexte.' },
    ],
    budgetRange: 'Inauguration site industriel 200 personnes : 30 000 à 80 000 € HT. Inauguration majeure avec ministre + presse : 100 000 à 250 000 € HT.',
    relatedCarnet: ['securite', 'logistique', 'communication', 'lieu', 'hotesses'],
  },
  {
    slug: 'concert-entreprise',
    type: 'on-fait',
    shortLabel: 'Concert',
    cardLabel: 'Concert privé d\'entreprise',
    iconKey: 'son-lumiere',
    title: 'Concert privé d\'entreprise : production scénique complète',
    metaDescription: 'Concert privé d\'entreprise : booking artistique, scène, son grand format, lumière, sécurité spectateurs. Production Plaine de l\'Ain, Lyon, Genève.',
    intro: 'Le concert privé est un moment fort de fidélisation, de récompense, de communication. Booking artiste, scénographie scénique, son grand format, sécurité spectateurs : la production technique d\'un concert obéit à des règles propres, différentes d\'une conférence ou d\'une soirée d\'entreprise. Format souvent enchaîné en clôture d\'une convention ou d\'un événement de recrutement.',
    definition: 'Concert d\'un artiste ou d\'un groupe en cadre privé d\'entreprise : showcase intimiste, soirée d\'équipe, clôture de congrès, lancement majeur. Cible : 200 à 5 000 personnes. Implique relations artistiques, contraintes techniques rider, sécurité spectateurs, déclarations SACEM, autorisations ERP/CTS.',
    method: [
      { title: 'Booking artistique', desc: 'Sélection adaptée à l\'audience et au budget, négociation cachet, contractualisation, lecture précise du rider technique et hospitality.' },
      { title: 'Production scénique', desc: 'Scène pro dimensionnée à la jauge, son grand format dédié, lumière concert, backline selon rider, loges artistes calées.' },
      { title: 'Sécurité spectateurs', desc: 'Barrière de scène, agents stewards, plan de prévention, gestion des fluides de circulation, ouverture portes sécurisée.' },
      { title: 'Captation et droits', desc: 'Captation possible avec accord artiste, gestion droits SACEM, livraison post-événement cadrée dans le contrat artistique.' },
    ],
    dispositif: [
      { label: 'Scène concert', desc: 'Gril lourd avec calculs charge, retours de scène, espaces backstage, escaliers d\'accès artistes, rampes techniques.' },
      { label: 'Son grand format', desc: 'Line array dimensionné jauge et lieu, retours wedge ou IEM, console FOH + console retour, ingénieurs son artistique fournis ou coordonnés avec l\'équipe artiste.' },
      { label: 'Lumière concert', desc: 'Lyres asservies, blinders, suiveurs, machines à brouillard, conduite live ou pré-programmée selon l\'artiste.' },
      { label: 'Backline', desc: 'Matériel artiste fourni selon rider : batterie, amplis guitare et basse, claviers, percussions. Coordination avec le tour manager.' },
      { label: 'Loges artistes', desc: 'Espace privatif sécurisé, hospitality rider (catering, boissons, serviettes, accessoires spécifiques), accès véhicule artiste.' },
      { label: 'Sécurité', desc: 'Barrière de scène, stewards accrédités, agents de sécurité, plan de prévention validé en amont, coordination avec les services de secours.' },
    ],
    budgetRange: 'Showcase intimiste 200 personnes : 30 000 à 80 000 € HT (production technique hors cachet artiste). Concert clôture de convention 800 personnes : 80 000 à 200 000 € HT. Concert majeur avec tête d\'affiche : varie fortement selon le cachet artistique.',
    relatedCarnet: ['son-lumiere', 'scene', 'securite', 'captation'],
  },
  {
    slug: 'evenement-recrutement',
    type: 'on-fait',
    shortLabel: 'Recrutement',
    cardLabel: 'Événement de recrutement Plaine de l\'Ain',
    iconKey: 'communication',
    title: 'Événement de recrutement Plaine de l\'Ain : production premium pour bassin emploi',
    metaDescription: 'Événement de recrutement scénographié dans la Plaine de l\'Ain : forum entreprises, job dating premium, branding employeur. Production complète.',
    intro: 'Le bassin Plaine de l\'Ain concentre des besoins de recrutement importants : logistique, industrie, services, distribution. L\'événement de recrutement premium se distingue d\'un simple forum par sa scénographie, son branding employeur et sa capacité à transformer la candidature en moment d\'expérience marque. Format souvent combiné avec une soirée concert pour transformer un job dating en événement marquant.',
    definition: 'Événement organisé par une entreprise ou un consortium pour attirer, qualifier et engager des candidats. Format possible : forum métiers, job dating premium, journée portes ouvertes industrielle, soirée recrutement scénographiée. Cible : 100 à 2 000 candidats sur la journée.',
    method: [
      { title: 'Stratégie marque employeur', desc: 'Direction artistique cohérente avec la communication RH, identité visuelle dédiée à l\'événement, narrative employeur fort déployé sur tous les supports.' },
      { title: 'Scénographie d\'accueil', desc: 'Parcours candidat repensé, espaces d\'attente confortables, branding fort dès l\'arrivée, captation des données candidat fluide.' },
      { title: 'Dispositifs candidat', desc: 'Espaces de pitch entreprise, salles d\'entretien équipées, démonstrations métiers immersives, simulations pour les postes opérationnels.' },
      { title: 'Animation soirée', desc: 'Option d\'enchaîner sur format soirée (DJ, concert, cocktail) pour transformer l\'événement en expérience marque qui se raconte le lundi à la pause café.' },
    ],
    dispositif: [
      { label: 'Espace forum', desc: 'Stands employeur scénographiés, signalétique métiers, totems digitaux d\'orientation, kits candidat (programme, plan, badge).' },
      { label: 'Salles d\'entretien', desc: 'Modulaires, équipées tablette ou écran, gestion du flux candidats avec horaires affichés, isolation acoustique.' },
      { label: 'Espace pitch entreprise', desc: 'Scène avec son et lumière pour prises de parole employeur, présentations métiers, témoignages collaborateurs.' },
      { label: 'Démonstrations métiers', desc: 'Modules immersifs montrant le quotidien des postes proposés, ateliers métiers animés, simulations pour les profils techniques.' },
      { label: 'Branding global', desc: 'Signalétique cohérente, totems, écrans LED, kits candidat, vestiaire branded, photobooth optionnel pour partage réseaux sociaux.' },
      { label: 'Soirée combinée', desc: 'Enchaînement vers cocktail, DJ ou concert privé pour les candidats retenus en short-list. Voir fiches soirée et concert.' },
    ],
    budgetRange: 'Forum recrutement scénographié 500 candidats : 25 000 à 60 000 € HT. Événement employeur premium 1 000+ candidats avec soirée : 80 000 à 200 000 € HT.',
    relatedCarnet: ['communication', 'mobilier', 'son-lumiere', 'animation', 'hotesses'],
  },
  {
    slug: 'reunion-strategique',
    type: 'on-fait',
    shortLabel: 'Réunion stratégique',
    cardLabel: 'Réunion stratégique en business center',
    iconKey: 'mobilier',
    title: 'Réunion stratégique d\'entreprise : business center, écran XXL, traiteur',
    metaDescription: 'Réunion stratégique d\'une journée ou demi-journée : salle privée, écran TV XXL, traiteur, scénographie soignée. Plaine de l\'Ain et Lyon.',
    intro: 'La réunion stratégique en petit comité demande la même rigueur de production qu\'un événement à grande jauge : silence acoustique, écran adapté, son intelligible, mobilier ergonomique pour la journée, traiteur calé sur le timing décisionnel. C\'est cette production audiovisuelle invisible qui change la qualité d\'une décision prise en comité de direction.',
    cover: 'https://enjoylife.b-cdn.net/Epicentre/business-center.jpg',
    definition: 'Réunion en petit comité (8 à 30 personnes), d\'une journée ou demi-journée, en business center privé, hôtel ou lieu d\'exception. Cible : comité de direction, board meeting, séminaire stratégique restreint, comité d\'investissement, réunion d\'avocats, négociation. Le confort, la confidentialité et la qualité audiovisuelle priment sur le spectaculaire.',
    method: [
      { title: 'Sourcing salle', desc: 'Business center adapté au nombre, équipement audiovisuel pro (écran 75 à 110 pouces selon la salle), isolation acoustique vérifiée, confidentialité garantie par le lieu.' },
      { title: 'Scénographie de réunion', desc: 'Agencement de table calculé (U, chevron, ovale), écran bien placé en hauteur et distance, lumière confort modulable, mobilier ergonomique pour journée complète.' },
      { title: 'Production audiovisuelle', desc: 'Écran XXL au format adapté, sonorisation discrète, captation possible si décisions à archiver ou rediffuser, visioconférence pour les participants distants.' },
      { title: 'Hospitality calée', desc: 'Café d\'accueil, déjeuner buffet ou assis selon le rythme décisionnel, pauses gourmandes synchronisées avec l\'agenda, eau et boissons en continu.' },
    ],
    dispositif: [
      { label: 'Salle privée', desc: 'Business center de standing, isolation acoustique, fenêtres avec store ou volet roulant pour modulation lumière naturelle, climatisation maîtrisée.' },
      { label: 'Écran TV XXL', desc: '75 à 110 pouces selon la salle, hauteur calée debout/assis, son intégré ou enceintes complémentaires si visioconférence multi-sites.' },
      { label: 'Mobilier ergonomique', desc: 'Table de réunion en U, chevron ou ovale selon le format, fauteuils ergonomiques calés pour journée complète, paperboards et marqueurs.' },
      { label: 'Captation discrète', desc: 'Enregistrement audio des décisions, transcription, livraison sécurisée. Sur option, captation vidéo confidentielle.' },
      { label: 'Traiteur calé', desc: 'Café d\'accueil avec mignardises, déjeuner adapté à la durée du board (assis ou buffet), pauses gourmandes synchronisées sur l\'agenda, eau et boissons en libre-service.' },
      { label: 'Confidentialité', desc: 'Badges d\'accès, pas d\'affichage public du nom de la réunion, NDA signés par les hôtesses et les techniciens présents, gestion des téléphones en zone tampon.' },
    ],
    budgetRange: 'Réunion stratégique 12 personnes journée : 1 200 à 3 500 € HT (salle + écran + traiteur, hors traiteur premium). Réunion direction 20 personnes 1 jour avec captation et confidentialité renforcée : 3 500 à 8 000 € HT.',
    relatedCarnet: ['lieu', 'traiteur'],
  },

  // ============================================================
  // CE QU'ON ORIENTE
  // ============================================================
  {
    slug: 'team-building',
    type: 'on-oriente',
    shortLabel: 'Team building',
    cardLabel: 'Team building',
    iconKey: 'animation',
    title: 'Team building d\'entreprise : pourquoi on vous oriente',
    metaDescription: 'Team building d\'entreprise : critères de choix, formats, prestataires. On ne produit pas mais on vous oriente vers les bons interlocuteurs.',
    intro: 'Le team building n\'est pas notre métier. C\'est un format à part entière, avec ses spécialistes, ses formats, sa dramaturgie. Quand vous nous interrogez sur un team building, on oriente vers des confrères dimensionnés pour ça, plutôt que de bricoler une offre hors périmètre.',
    whyNotUs: 'Notre niche est la production d\'événements à enjeu scénique : plénières, galas, lancements, captation. Le team building demande une expertise pédagogique et d\'animation différente : facilitateurs formés, contenus testés, encadrement d\'activités. Forcer ce format dans un cadre de production technique ne sert ni vous, ni nous.',
    bestApproach: 'Préciser ce que vous cherchez vraiment : cohésion d\'équipe (séminaire avec activité), récompense (sortie, voyage), construction (atelier de design thinking, hackathon). Chaque besoin appelle un type de prestataire différent, et la confusion sur l\'objectif est la première source de team building ratés.',
    whoToCall: 'Agences spécialisées team building (Funbooker, Cocoom, agences locales du bassin). Si l\'animation s\'inscrit dans une convention plus large où on assure la production scène, on coordonne avec votre prestataire team building : la régie générale prend le relai aux transitions.',
  },
  {
    slug: 'salon-stand',
    type: 'on-oriente',
    shortLabel: 'Salon, stand',
    cardLabel: 'Salon & stand',
    iconKey: 'mobilier',
    title: 'Salon professionnel et stand : pourquoi on vous oriente',
    metaDescription: 'Salon, stand professionnel : critères de choix, prestataires, logistique. On ne produit pas mais on conseille les bons interlocuteurs.',
    intro: 'Salons et stands sont une discipline en soi : standistes spécialisés, scénographie commerciale, gestion du flux visiteurs, dispositifs de capture de leads. Ce n\'est pas notre métier de production technique d\'événements à enjeu scénique.',
    whyNotUs: 'Un stand sur salon professionnel n\'a presque rien à voir avec une plénière scénographiée. Les contraintes (montage en quelques heures, normes du salon, espaces restreints, fonctions commerciales) demandent une expertise dédiée. Plusieurs agences le font très bien, on n\'a pas vocation à doublonner.',
    bestApproach: 'Cadrer l\'objectif commercial : stand vitrine d\'image, stand démonstration produit, stand génération de leads. Chaque objectif change le brief scénographique et le dispositif d\'animation. Le ROI d\'un stand se mesure, donc on commence par le ROI cible.',
    whoToCall: 'Standistes spécialisés (Centthor, Sotrade Stand, agences régionales selon le salon). Si votre stand intègre un format de prise de parole structurée (mini-conférences, démonstrations live), on peut produire la partie audiovisuelle et scénique en complément du stand lui-même.',
  },
  {
    slug: 'evenement-prive',
    type: 'on-oriente',
    shortLabel: 'Mariage, privé',
    cardLabel: 'Mariage & événement privé',
    iconKey: 'animation',
    title: 'Mariage, anniversaire, événement privé : pourquoi on vous oriente',
    metaDescription: 'Mariage, anniversaire, événement privé : critères et orientation prestataires. Hors périmètre Plaine, l\'agence intervient sur l\'angle production technique uniquement.',
    intro: 'Les événements privés (mariage, anniversaire, fête de famille) ont leur propre écosystème de prestataires : wedding planners, traiteurs spécialisés, photographes, DJ. Notre niche est le B2B à enjeu scénique : on n\'est pas le bon interlocuteur pour produire un mariage de A à Z.',
    whyNotUs: 'Le mariage demande une intelligence émotionnelle et une connaissance des codes privés que les wedding planners maîtrisent mieux que nous. Notre approche est dimensionnée pour des événements d\'entreprise à enjeu communication : c\'est une autre logique.',
    bestApproach: 'Si vous cherchez un mariage en grande jauge avec dispositif technique poussé (groupe live, scénographie scénique, captation pro), on peut intervenir sur la partie production technique uniquement, en collaboration avec votre wedding planner. Pour un événement privé classique, mieux vaut s\'adresser directement aux spécialistes du secteur.',
    whoToCall: 'Wedding planners reconnus, traiteurs mariage spécialisés, lieux privatisables avec coordination interne. Pour le périmètre B2C élargi, le Domaine d\'Épinac (epinac.epicentre-seminaires.fr) accueille les événements privés sur son lieu propre, c\'est une démarche distincte.',
  },
  {
    slug: 'location-materiel-sec',
    type: 'on-oriente',
    shortLabel: 'Location matériel',
    cardLabel: 'Location matériel sec',
    iconKey: 'logistique',
    title: 'Location de matériel événementiel : pourquoi on vous oriente',
    metaDescription: 'Location de matériel événementiel sec (son, lumière, scène, mobilier) : on n\'est pas loueur, on conseille les bons interlocuteurs.',
    intro: 'On n\'est pas loueur de matériel. Notre métier est la production : on conçoit, on coordonne, on pilote. Quand un client cherche une location sèche (sans pilotage technique, sans ingénieur sur place), on oriente vers les loueurs spécialisés du bassin.',
    whyNotUs: 'La valeur d\'Epicentre est dans le pilotage et la coordination. Une location sèche a sa logique économique : un loueur amortit son parc sur des centaines de locations annuelles, ses tarifs sont plus serrés que ceux d\'une agence. Vous payeriez notre marge sans bénéficier de notre apport.',
    bestApproach: 'Préciser si vous voulez vraiment du matériel sec (auquel cas un loueur direct est plus rentable), ou si vous cherchez un dispositif technique avec ingénieur de scène / sondier (auquel cas c\'est notre métier). La frontière n\'est pas évidente : on aide à la clarifier au téléphone.',
    whoToCall: 'Loueurs régionaux pro (LOC4VENT, ABC Events, prestataires audiovisuels du bassin lyonnais). Pour un dispositif technique avec pilotage humain (ce qu\'on appelle souvent « location avec ingénieur »), parlez-nous : on regarde si ça relève de notre périmètre ou si on oriente.',
  },
];

export const getFormatBySlug = (slug: string) => formats.find((f) => f.slug === slug);
export const formatsOnFait = formats.filter((f) => f.type === 'on-fait');
export const formatsOnOriente = formats.filter((f) => f.type === 'on-oriente');
