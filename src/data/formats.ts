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
    shortLabel: 'Plénière',
    cardLabel: 'Plénière d\'entreprise',
    iconKey: 'scene',
    title: 'Plénière d\'entreprise : production scénographiée',
    metaDescription: 'Plénière d\'entreprise : scénographie, scène, son, lumière, vidéo, captation. Production complète dans la Plaine de l\'Ain et au-delà.',
    intro: 'La plénière est le format institutionnel par excellence : un public assis, une scène, des intervenants, un message à porter. La qualité de la production technique fait la différence entre une plénière qui marque et une qui s\'oublie.',
    definition: 'Format réunissant un public assis face à une scène, pour une prise de parole structurée d\'une à quatre heures. Cible : 100 à 1 500 personnes selon le lieu et l\'enjeu. La plénière sert généralement de moment fort à une convention, un séminaire, une AG ou un lancement.',
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
    slug: 'convention-entreprise',
    type: 'on-fait',
    shortLabel: 'Convention',
    cardLabel: 'Convention d\'entreprise',
    iconKey: 'communication',
    title: 'Convention d\'entreprise : plénière, ateliers, soirée',
    metaDescription: 'Convention d\'entreprise : plénière scénographiée, ateliers parallèles, dîner soirée. Production complète Plaine de l\'Ain, Lyon, Genève.',
    intro: 'La convention est un format dense : plénière institutionnelle, ateliers en sous-groupes, déjeuner, soirée. Les enjeux logistiques pèsent autant que les enjeux scéniques. La fluidité des transitions fait toute la différence sur la perception d\'ensemble.',
    definition: 'Réunion d\'entreprise sur une journée ou deux, combinant plénière(s), ateliers parallèles, restauration et souvent un format soirée. Cible : 200 à 2 000 personnes. Demande coordination logistique, hébergement, transferts, signalétique multi-espaces.',
    method: [
      { title: 'Architecture événementielle', desc: 'On dessine le parcours invité de l\'arrivée à la sortie. Chaque transition est pensée, signalée, doublée d\'un coordinateur.' },
      { title: 'Coordination prestataires', desc: 'Plénière, ateliers, traiteur, hébergement, transferts : un seul interlocuteur qui orchestre l\'ensemble.' },
      { title: 'Signalétique unifiée', desc: 'Direction artistique cohérente sur tous les supports : invitations, badges, totems, écrans, tenues hôtesses.' },
      { title: 'Pilotage jour J', desc: 'Régie générale au cœur du dispositif, coordinateurs sur chaque zone (plénière, ateliers, catering), talkies pour la communication interne.' },
    ],
    dispositif: [
      { label: 'Plénière scénographiée', desc: 'Voir notre fiche plénière : scène, son, lumière, vidéo, captation, IMAG selon la jauge.' },
      { label: 'Salles ateliers', desc: 'Captation simplifiée par salle, signalétique directionnelle, mobilier coordonné, animation par les intervenants ou facilitateurs externes.' },
      { label: 'Espaces communs', desc: 'Café d\'accueil, déjeuner buffet ou assis, cocktail clôture. Coordination traiteur sur la journée complète.' },
      { label: 'Soirée', desc: 'Dîner assis ou debout selon format, animation scénique ou musicale, lumière ambiance. Voir fiche gala pour le format dîner gala.' },
      { label: 'Logistique', desc: 'Bloc hôtel négocié, transferts navettes ou auto-coordonnés, signalétique de circulation, accueil multilingue selon le besoin.' },
      { label: 'Communication', desc: 'Application événementielle ou kit papier, programme interactif, messagerie interne pour les changements de dernière minute.' },
    ],
    budgetRange: 'Convention 200 personnes 1 journée : 50 000 à 120 000 € HT total (production + lieu + traiteur + logistique). Convention 800 personnes 2 jours résidentielle : 250 000 à 600 000 € HT.',
    relatedCarnet: ['lieu', 'traiteur', 'logistique', 'son-lumiere', 'communication'],
  },
  {
    slug: 'gala-entreprise',
    type: 'on-fait',
    shortLabel: 'Gala',
    cardLabel: 'Gala & dîner d\'entreprise',
    iconKey: 'animation',
    title: 'Gala d\'entreprise : dîner assis, scène, animation',
    metaDescription: 'Gala d\'entreprise : dîner assis scénographié, remise de prix, animation. Production complète Plaine de l\'Ain et région lyonnaise.',
    intro: 'Le gala est un format de récompense, de rassemblement, de moment fort. Dîner assis, scénographie de salle, prise de parole, animation, remise de prix. La frontière entre un dîner d\'entreprise et un gala mémorable tient à l\'attention portée aux détails scénographiques et à la fluidité du déroulé.',
    cover: 'https://enjoylife.b-cdn.net/Epicentre/epicentre-villieu.jpg',
    definition: 'Soirée d\'entreprise avec dîner assis et programme scénique : prises de parole, remises de prix, animation, parfois show. Cible : 100 à 1 200 personnes. Lieu privatisé (château, hôtel, lieu d\'exception) ou salle aménagée. Durée typique : 4 à 6 heures.',
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
    slug: 'captation-multicam',
    type: 'on-fait',
    shortLabel: 'Captation',
    cardLabel: 'Captation vidéo multicam',
    iconKey: 'captation',
    title: 'Captation vidéo multicam d\'événement d\'entreprise',
    metaDescription: 'Captation vidéo multicam d\'événement d\'entreprise : régie complète, streaming live, livrables. Production technique sur Lyon et Plaine de l\'Ain.',
    intro: 'La captation transforme un événement éphémère en actif communication durable. Une captation bien produite nourrit le site corporate, les réseaux sociaux, les communications internes pendant des mois. Le cadrage du périmètre et des droits d\'usage est aussi important que la qualité technique.',
    definition: 'Production vidéo en direct d\'un événement avec plusieurs caméras, régie de mixage, son capté en régie audio. Livrables : best-of, intégrale, capsules courtes pour les réseaux. Streaming live possible pour audience distante.',
    method: [
      { title: 'Cadrage éditorial', desc: 'Quel usage post-événement ? Communication interne, réseaux sociaux, presse, archive ? Le cadrage en amont conditionne le dispositif technique.' },
      { title: 'Dispositif caméras', desc: '2 à 6 caméras selon le format, fixes et steady, optiques calibrées, son capté en direct depuis la régie audio principale.' },
      { title: 'Régie live', desc: 'Mixage en temps réel sur switcher, programmation des plans, ajustement des cadrages, monitoring image et son en continu.' },
      { title: 'Post-production', desc: 'Best-of de 2 à 4 minutes livré sous 5 jours, intégrale livrée sous 3 semaines, capsules réseaux découpées et formatées 16/9 et 9/16.' },
    ],
    dispositif: [
      { label: 'Caméras', desc: 'Caméras pro 4K, optiques zooms longues focales pour les plans publics, courte focale pour la scène. Steady ou fixes selon les plans cherchés.' },
      { label: 'Régie vidéo', desc: 'Switcher pro, monitoring multi-écrans, intercom avec les caméramen, enregistrement de chaque source en propre + flux mixé.' },
      { label: 'Son captation', desc: 'Capté en direct depuis la console son de l\'événement (split signal). Pas de captation par micro caméra qui dégrade la qualité finale.' },
      { label: 'Streaming live', desc: 'Encodeur pro, redondance internet (filaire + 4G/5G), plateforme YouTube, LinkedIn ou solution privée selon le besoin.' },
      { label: 'Slides intégrées', desc: 'Récupération du flux ordinateur de présentation, intégration en split screen ou bascule full-screen sur les slides clés.' },
      { label: 'Livraison', desc: 'Best-of à J+5, intégrale à J+15, capsules réseaux au choix. Cession de droits cadrée dans le devis (durée, territoire, usage).' },
    ],
    budgetRange: 'Bicam + régie + montage : 4 000 à 8 000 € HT. Multicam 4 caméras + streaming live + post-prod : 12 000 à 25 000 € HT. Captation majeure 6 caméras + régie pro : 30 000 € HT et plus.',
    relatedCarnet: ['captation', 'son-lumiere', 'communication'],
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
