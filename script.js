// Base de données des pièces
const pieces = [
   {
    nom: { fr: 'Amortisseur', mg: 'Amortizera' },
    image: 'images/amortisseur.png',
    role: {
      fr: 'Absorbe les chocs et vibrations causés par les irrégularités de la route, assurant un confort de conduite et une meilleure tenue de route.',
      mg: 'Misoroka ny dona sy ny hovitrovitra ateraky ny tsy fahatsaran’ny lalana, manome fampiononana sy fifehezana tsara kokoa ny fiara.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement l’état des amortisseurs pour éviter l’usure prématurée et garantir la sécurité du véhicule.',
      mg: 'Zahao matetika ny toe-javatra mba hisorohana ny fitafiana aloha loatra sy hiantohana ny fiarovana ny fiara.'
    }
  },
  {
    nom: { fr: 'Freins', mg: 'Freinina' },
    image: 'images/freins.png',
    role: {
      fr: 'Permet de ralentir ou d’arrêter le véhicule en créant une friction contre les roues, garantissant un contrôle précis de la vitesse.',
      mg: 'Ahafahana mihenjana na mijanona ny fiara amin’ny famoronana fifandirana amin’ny kodiarana, manome fifehezana marina ny hafainganam-pandeha.'
    },
    astuce: {
      fr: 'Changez les plaquettes de frein dès qu’elles sont usées pour assurer un freinage optimal et éviter des dommages aux disques.',
      mg: 'Soloy ny takelaka frein rehefa voan’ny fitafiana mba hiantohana ny fiasan’ny frein tsara sy hisorohana fahasimbana amin’ny disk.'
    }
  },
  {
    nom: { fr: 'Direction', mg: 'Fitarihana' },
    image: 'images/direction.png',
    role: {
      fr: 'Assure la direction du véhicule en permettant au conducteur de changer la trajectoire en toute sécurité et avec précision.',
      mg: 'Mikaroka ny fitarihana ny fiara amin’ny alàlan’ny fanomezan-dalana ny mpamily hanova ny lalan-kizorana amin’ny fomba azo antoka sy mazava.'
    },
    astuce: {
      fr: 'Surveillez le jeu dans le volant et la réactivité de la direction pour prévenir des problèmes de sécurité.',
      mg: 'Araho maso ny fahitana malalaka ao amin’ny familiana sy ny faharetana mba hisorohana olana amin’ny fiarovana.'
    }
  },
  {
    nom: { fr: 'Injecteur', mg: 'Injektera' },
    image: 'images/injecteur.png',
    role: {
      fr: 'Injecte du carburant dans le moteur sous haute pression pour optimiser la combustion et améliorer les performances du véhicule.',
      mg: 'Manatsofoka solika ao anaty motera amin’ny tsindry avo mba hanatsarana ny fandoroana sy hanatsara ny zava-bitan’ny fiara.'
    },
    astuce: {
      fr: 'Nettoyez régulièrement les injecteurs pour éviter l’accumulation de dépôts et garantir une injection précise du carburant.',
      mg: 'Diovina matetika ny injecteurs mba hisorohana ny fitobian’ny loto ary hiantohana ny fampidirana mazava ny solika.'
    }
  },
  {
    nom: { fr: 'Vilebrequin', mg: 'Vilebrekiny' },
    image: 'images/vilebrequin.png',
    role: {
      fr: 'Transmet le mouvement linéaire des pistons en rotation, essentiel pour générer la puissance motrice nécessaire au véhicule.',
      mg: 'Mampita ny hetsika tsivalana avy amin’ny piston ho lasa fihodinana, tena ilaina amin’ny famoronana herin-dasantsy ilaina amin’ny fiara.'
    },
    astuce: {
      fr: 'Graissez régulièrement le vilebrequin pour éviter l’usure et assurer un fonctionnement fluide du moteur.',
      mg: 'Ankoatra ny fikojakojana ny vilebrekiny mba hisorohana ny fitafiana sy hiantohana ny fandehanan’ny motera tsara.'
    }
  },
    {
    nom: { fr: 'Culasse', mg: 'Culasse' },
    image: 'images/culasse.png',
    role: {
      fr: 'Coiffe le moteur, assure l’étanchéité des chambres de combustion et permet la circulation des fluides.',
      mg: 'Mampindrona ny motera, miantoka ny tsy fidiran’ny rivotra amin’ny efitra fandoroana ary mamela ny fivezivezen’ny ranoka.'
    },
    astuce: {
      fr: 'Surveillez les fissures et les fuites de liquide pour éviter des surchauffes.',
      mg: 'Araho maso ny triatra sy ny fitsoahan’ny ranoka mba hisorohana ny hafanana be loatra.'
    }
  },
  {
    nom: { fr: 'Embrayage', mg: 'Embrazy' },
    image: 'images/embrayage.png',
    role: {
      fr: 'Permet de lier ou délier la transmission du moteur aux roues pour changer de vitesse.',
      mg: 'Ahafahana mampifandray na manasaraka ny fifindran’ny herin’ny motera amin’ny kodiarana mba hanovana hafainganam-pandeha.'
    },
    astuce: {
      fr: 'Évitez de garder le pied sur la pédale d’embrayage pour prolonger sa durée de vie.',
      mg: 'Fadio ny fampijanonana ny tongotra eo amin’ny pedalina mba hanalava ny androm-piasany.'
    }
  },
  {
    nom: { fr: 'Turbo', mg: 'Turbo' },
    image: 'images/turbo.png',
    role: {
      fr: 'Augmente la puissance du moteur en compressant l’air entrant pour optimiser la combustion.',
      mg: 'Manatsara ny herin’ny motera amin’ny alàlan’ny famoretana ny rivotra miditra mba hanatsarana ny fandoroana.'
    },
    astuce: {
      fr: 'Laissez tourner le moteur quelques secondes après arrêt pour refroidir le turbo.',
      mg: 'Avelao hihazakazaka ny motera segondra vitsivitsy aorian’ny fijanonana mba hanalana hafanana ny turbo.'
    }
  },
  {
    nom: { fr: 'Démarreur', mg: 'Fanombohana' },
    image: 'images/demarreur.png',
    role: {
      fr: 'Permet de lancer le moteur en engageant le volant moteur grâce à l’électricité de la batterie.',
      mg: 'Ahafahana mampandeha ny motera amin’ny alàlan’ny fampandehanana ny volant motera amin’ny herin’ny batterie.'
    },
    astuce: {
      fr: 'Vérifiez les connexions électriques et la charge de la batterie pour un démarrage efficace.',
      mg: 'Zahao ny fifandraisana herinaratra sy ny fiampangan’ny batterie mba hanome fanombohana tsara.'
    }
  },
  {
    nom: { fr: 'Filtre à air', mg: 'Sivana rivotra' },
    image: 'images/filtre_air.png',
    role: {
      fr: 'Empêche les impuretés de l’air d’entrer dans le moteur pour une combustion propre.',
      mg: 'Manakana ny loto amin’ny rivotra tsy hiditra ao amin’ny motera mba hanome fandoroana madio.'
    },
    astuce: {
      fr: 'Nettoyez ou remplacez régulièrement le filtre pour maintenir la performance du moteur.',
      mg: 'Diovina na soloina matetika ny sivana mba hanatsarana ny zava-bitan’ny motera.'
    }
  },
  {
    nom: { fr: 'Bougie', mg: 'Bougie' },
    image: 'images/bougie.png',
    role: {
      fr: 'Crée une étincelle pour allumer le mélange air/carburant dans le moteur à combustion interne.',
      mg: 'Mamokatra angovo hanapahana ny fifangaroan’ny rivotra sy solika ao amin’ny motera fandoroana anatiny.'
    },
    astuce: {
      fr: 'Vérifiez l’état des bougies régulièrement pour éviter des démarrages difficiles.',
      mg: 'Zahao ny toe-javatra matetika mba hisorohana ny fahasarotana amin’ny fanombohana.'
    }
  },
  {
    nom: { fr: 'Filtre à carburant', mg: 'Sivana solika' },
    image: 'images/filtre_carburant.png',
    role: {
      fr: 'Filtre les impuretés du carburant avant qu’il n’entre dans le moteur pour une combustion efficace.',
      mg: 'Manivana ny loto amin’ny solika alohan’ny hidiran’ny motera mba hanatsarana ny fandoroana.'
    },
    astuce: {
      fr: 'Changez le filtre à intervalles réguliers pour éviter l’encrassement du moteur.',
      mg: 'Soloina amin’ny fotoana voatondro ny sivana mba hisorohana ny loto ao amin’ny motera.'
    }
  },
  {
    nom: { fr: 'Kit de distribution', mg: 'Kit distribution' },
    image: 'images/kit_distribution.png',
    role: {
      fr: 'Assure la synchronisation entre le vilebrequin et l’arbre à cames pour une combustion précise.',
      mg: 'Miantoka ny fampifanarahan’ny vilebrekiny sy ny arbre à cames mba hanome fandoroana marina.'
    },
    astuce: {
      fr: 'Remplacez le kit de distribution tous les 100 000 km pour éviter la casse moteur.',
      mg: 'Soloina ny kit distribution isaky ny 100 000 km mba hisorohana ny fahapotehan’ny motera.'
    }
  },
  {
    nom: { fr: 'Pompe à eau', mg: 'Paompy rano' },
    image: 'images/pompe_eau.png',
    role: {
      fr: 'Fait circuler le liquide de refroidissement dans le moteur pour éviter la surchauffe.',
      mg: 'Mampandeha ny ranon’ny fanala hafanana ao amin’ny motera mba hisorohana ny hafanana be loatra.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement l’état de la pompe à eau pour prévenir les fuites et surchauffes.',
      mg: 'Zahao matetika ny toe-javatra mba hisorohana ny fitsoahana sy ny hafanana tafahoatra.'
    }
  },
  {
    nom: { fr: 'Courroie de distribution', mg: 'Fehin-kibo distribution' },
    image: 'images/courroie_distribution.png',
    role: {
      fr: 'Synchronise le mouvement des soupapes et des pistons pour un fonctionnement optimal du moteur.',
      mg: 'Mampifanaraka ny hetsika avy amin’ny valizy sy piston mba hampandeha tsara ny motera.'
    },
    astuce: {
      fr: 'Remplacez-la à intervalles réguliers pour éviter des dommages au moteur.',
      mg: 'Soloina amin’ny fotoana voatondro mba hisorohana ny fahasimbana amin’ny motera.'
    }
  },
  {
    nom: { fr: 'Pompe de direction', mg: 'Paompy fitarihana' },
    image: 'images/pompe_direction.png',
    role: {
      fr: 'Assure la circulation du fluide hydraulique pour faciliter la direction assistée.',
      mg: 'Miantoka ny fivezivezen’ny ranoka hydraulika mba hanamora ny fitarihana miaraka amin’ny fanampiana.'
    },
    astuce: {
      fr: 'Surveillez le niveau de fluide hydraulique et remplacez-le si nécessaire pour garantir une direction souple.',
      mg: 'Araho maso ny haavon’ny ranoka hydraulika ary soloina raha ilaina mba hanomezana fitarihana malefaka.'
    }
  },
  {
    nom: { fr: 'Embrayage multidisque', mg: 'Embrayage multidisque' },
    image: 'images/embrayage_multidisque.png',
    role: {
      fr: 'Permet de transmettre plus de puissance avec plusieurs disques pour les véhicules à haute performance.',
      mg: 'Mampita hery betsaka kokoa amin’ny alàlan’ny fampiasana disque maromaro ho an’ny fiara avo lenta.'
    },
    astuce: {
      fr: 'Assurez-vous d’un bon refroidissement pour éviter une usure prématurée des disques.',
      mg: 'Ataovy azo antoka fa tsara ny fanalana hafanana mba hisorohana ny fahasimbana haingana.'
    }
  },
  {
    nom: { fr: 'Roue libre', mg: 'Roue libre' },
    image: 'images/roue_libre.png',
    role: {
      fr: 'Permet de désaccoupler la transmission lors des décélérations pour économiser du carburant.',
      mg: 'Ahafahana manasaraka ny fifindrana amin’ny fotoana fampihenana hafainganam-pandeha mba hitsitsiana solika.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement l’état des roulements pour un bon fonctionnement.',
      mg: 'Zahao matetika ny fifandraisan’ny bearings mba hampandeha tsara.'
    }
  },
  {
    nom: { fr: 'Convertisseur de couple', mg: 'Convertisseur de couple' },
    image: 'images/convertisseur_couple.png',
    role: {
      fr: 'Transmet la puissance du moteur à la transmission automatique avec un effet multiplicateur de couple.',
      mg: 'Mampita ny herin’ny motera amin’ny fifindrana mandeha ho azy miaraka amin’ny fampitomboana ny hery.'
    },
    astuce: {
      fr: 'Surveillez le niveau de fluide de transmission pour éviter des glissements.',
      mg: 'Araho maso ny haavon’ny ranoka fampitana mba hisorohana ny solafaka.'
    }
  },
  {
    nom: { fr: 'Engrenages', mg: 'Engrenazy' },
    image: 'images/engrenages.png',
    role: {
      fr: 'Transmettent le mouvement et ajustent la vitesse ou le couple dans les systèmes mécaniques.',
      mg: 'Mampita ny hetsika ary mampifanaraka ny hafainganam-pandeha na ny hery amin’ny rafitra mekanika.'
    },
    astuce: {
      fr: 'Graissez régulièrement les engrenages pour éviter l’usure.',
      mg: 'Sivana matetika ny engrenazy mba hisorohana ny fahasimbana.'
    }
  },
  {
    nom: { fr: 'Pignon', mg: 'Pignona' },
    image: 'images/pignon.png',
    role: {
      fr: 'Engrenage circulaire qui transfère la puissance à une chaîne ou une autre pièce d’engrenage.',
      mg: 'Engrenazy boribory mampita hery amin’ny rojo na ampahany hafa amin’ny mekanisma.'
    },
    astuce: {
      fr: 'Remplacez les pignons usés pour éviter des désalignements.',
      mg: 'Soloina ny pignona simba mba hisorohana ny tsy fifanarahana.'
    }
  },
  {
    nom: { fr: 'Solénoïdes électriques', mg: 'Solenoida elektrika' },
    image: 'images/solenoides_electriques.png',
    role: {
      fr: 'Utilisés pour contrôler le débit de fluide dans les systèmes de transmission et de freinage.',
      mg: 'Ampiasaina mba hifehezana ny fikorianan’ny ranoka amin’ny rafitra fampitana sy freinina.'
    },
    astuce: {
      fr: 'Testez régulièrement les solénoïdes pour assurer une réponse rapide.',
      mg: 'Andramo matetika ny solenoida mba hahazoana valiny haingana.'
    }
  },
  {
    nom: { fr: 'Régulateur centrifuge', mg: 'Régulateur centrifuge' },
    image: 'images/regulateur_centrifuge.png',
    role: {
      fr: 'Contrôle la vitesse du moteur en ajustant automatiquement le débit de carburant selon la force centrifuge.',
      mg: 'Mifehy ny hafainganam-pandehan’ny motera amin’ny alàlan’ny fanitsiana ho azy ny fikorianan’ny solika arakaraky ny hery sentrifôgy.'
    },
    astuce: {
      fr: 'Vérifiez les ressorts et les poids pour un réglage précis.',
      mg: 'Zahao ny lohataona sy ny lanja mba hahazoana fanitsiana marina.'
    }
  },
   {
    nom: { fr: 'Tambour de frein', mg: 'Tambour freinina' },
    image: 'images/tambour_frein.png',
    role: {
      fr: 'Assure le freinage en pressant les mâchoires contre les parois internes du tambour.',
      mg: 'Manome freinina amin’ny alàlan’ny fametahana ny mâchoires amin’ny rindrin’ny tambour.'
    },
    astuce: {
      fr: 'Nettoyez et inspectez régulièrement pour éviter l’usure excessive.',
      mg: 'Diovy sy zahao matetika mba hisorohana ny fahasimbana haingana.'
    }
  },
  {
    nom: { fr: 'Étriers', mg: 'Étriera' },
    image: 'images/etriers.png',
    role: {
      fr: 'Maintient les plaquettes de frein en contact avec le disque pour assurer le freinage.',
      mg: 'Mitana ny plaquettes freinina mba hifandray amin’ny disque mba hampiato.'
    },
    astuce: {
      fr: 'Vérifiez le bon fonctionnement et remplacez les étriers usés.',
      mg: 'Zahao tsara ny asany ary soloina ny étriera simba.'
    }
  },
  {
    nom: { fr: 'Pistons', mg: 'Pistona' },
    image: 'images/pistons.png',
    role: {
      fr: 'Transmettent la force de freinage en poussant les plaquettes contre le disque.',
      mg: 'Mampita ny hery freinina amin’ny alàlan’ny fanosehana ny plaquettes hifandray amin’ny disque.'
    },
    astuce: {
      fr: 'Graissez régulièrement pour éviter qu’ils ne se grippent.',
      mg: 'Sivana matetika mba hisorohana ny fiovana.'
    }
  },
  {
    nom: { fr: 'Plaquettes de frein', mg: 'Plaquette freinina' },
    image: 'images/plaquettes_frein.png',
    role: {
      fr: 'Appuient contre le disque pour ralentir ou arrêter le véhicule.',
      mg: 'Manosika ny disque mba hampihena na hampijanona ny fiara.'
    },
    astuce: {
      fr: 'Changez les plaquettes lorsque l’usure atteint le témoin.',
      mg: 'Soloina ny plaquette raha vao simba ka mahatratra ny tondro.'
    }
  },
  {
    nom: { fr: 'Disque de frein', mg: 'Disque freinina' },
    image: 'images/disque_frein.png',
    role: {
      fr: 'Reçoit la pression des plaquettes pour ralentir le véhicule par friction.',
      mg: 'Mandray ny tsindry avy amin’ny plaquette mba hampihena ny hafainganam-pandehan’ny fiara amin’ny alàlan’ny friction.'
    },
    astuce: {
      fr: 'Vérifiez l’état du disque pour éviter les fissures ou l’usure irrégulière.',
      mg: 'Zahao tsara ny toe-javatra mba hisorohana ny triatra na ny tsy fitovian’ny fahasimbana.'
    }
  },
  {
    nom: { fr: 'Moyeu de roue', mg: 'Moyeu kodia' },
    image: 'images/moyeu_roue.png',
    role: {
      fr: 'Relie les roues au système de suspension et permet la rotation des roues.',
      mg: 'Mampifandray ny kodia amin’ny rafitra fiantohana ary mamela ny fihodinana.'
    },
    astuce: {
      fr: 'Vérifiez le jeu dans le moyeu pour éviter les vibrations excessives.',
      mg: 'Zahao ny fifandraisana mba hisorohana ny horohoro be loatra.'
    }
  },
  {
    nom: { fr: 'Liquide de frein', mg: 'Rano freinina' },
    image: 'images/liquide_frein.png',
    role: {
      fr: 'Transmet la pression hydraulique dans le système de freinage.',
      mg: 'Mampita ny tsindry hydraulic amin’ny rafitra freinina.'
    },
    astuce: {
      fr: 'Remplacez-le tous les deux ans pour éviter la perte d’efficacité.',
      mg: 'Soloina isaky ny roa taona mba hisorohana ny fahaverezan’ny hery.'
    }
  },
  {
    nom: { fr: 'Maître-cylindre de frein', mg: 'Maître-cylindre freinina' },
    image: 'images/maitre_cylindre_frein.png',
    role: {
      fr: 'Convertit la force du conducteur en pression hydraulique pour actionner les freins.',
      mg: 'Manova ny herin’ny mpamily ho tsindry hydraulic mba hampandeha ny freinina.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement l’étanchéité et le niveau de liquide.',
      mg: 'Zahao matetika ny ranoka sy ny fahazoan’ny tsindry tsara.'
    }
  },
  {
    nom: { fr: 'Amplificateur de freinage (Servofrein)', mg: 'Amplificateur freinina (Servo freinina)' },
    image: 'images/amplificateur_freinage.png',
    role: {
      fr: 'Amplifie la force appliquée sur la pédale de frein pour un freinage plus facile.',
      mg: 'Mampitombo ny herin’ny tsindry amin’ny pédale mba hanamora ny freinina.'
    },
    astuce: {
      fr: 'Vérifiez que l’amplificateur fonctionne correctement pour éviter une pédale dure.',
      mg: 'Zahao fa mandeha tsara ny amplificateur mba hisorohana ny tsindry mafy loatra.'
    }
  },
  {
    nom: { fr: 'Calculateurs (ordinateurs embarqués)', mg: 'Calculateur (ordinatera miampita)' },
    image: 'images/calculateur.png',
    role: {
      fr: 'Coordonne les différentes fonctions électroniques du véhicule.',
      mg: 'Mifehy ny asan’ny rafitra elektronika ao anaty fiara.'
    },
    astuce: {
      fr: 'Assurez-vous que les mises à jour du logiciel sont faites régulièrement.',
      mg: 'Ataovy ny fanavaozana ny rindrambaiko araka ny tokony ho izy.'
    }
  },
  {
    nom: { fr: 'Capteurs', mg: 'Capteur' },
    image: 'images/capteurs.png',
    role: {
      fr: 'Mesure diverses informations comme la vitesse, la température ou la pression.',
      mg: 'Mandrefy fampahalalana isan-karazany toy ny hafainganam-pandeha, hafanana na tsindry.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement les capteurs pour éviter les défaillances.',
      mg: 'Zahao tsy tapaka mba hisorohana ny fahasimbana.'
    }
  },
  {
    nom: { fr: 'Actionneurs', mg: 'Actionneur' },
    image: 'images/actionneurs.png',
    role: {
      fr: 'Convertissent les signaux électriques en mouvements mécaniques.',
      mg: 'Manova ny famantarana elektronika ho hetsika mekanika.'
    },
    astuce: {
      fr: 'Maintenez un bon entretien pour éviter les pannes.',
      mg: 'Ataovy ny fikojakojana tsara mba hisorohana ny fahatapahana.'
    }
  },
  {
    nom: { fr: 'Cartes électroniques', mg: 'Tabilao elektronika' },
    image: 'images/cartes_electroniques.png',
    role: {
      fr: 'Gèrent les circuits électroniques dans divers systèmes du véhicule.',
      mg: 'Mitantana ny faritra elektronika amin’ny rafitra isan-karazany ao anaty fiara.'
    },
    astuce: {
      fr: 'Gardez les cartes électroniques à l’abri de l’humidité.',
      mg: 'Arovy amin’ny hamandoana ny tabilao elektronika.'
    }
  },
  {
    nom: { fr: 'GPS', mg: 'GPS' },
    image: 'images/gps.png',
    role: {
      fr: 'Fournit des informations de localisation en temps réel.',
      mg: 'Manome fampahalalana momba ny toerana amin’ny fotoana tena izy.'
    },
    astuce: {
      fr: 'Mettez à jour les cartes régulièrement pour une précision optimale.',
      mg: 'Ataovy ny fanavaozana ny tabilao mba ho marina kokoa.'
    }
  },
  {
    nom: { fr: 'Amplificateur audio', mg: 'Amplifikatera feo' },
    image: 'images/amplificateur_audio.png',
    role: {
      fr: 'Augmente la puissance du signal audio pour les haut-parleurs.',
      mg: 'Manamafy ny herin’ny famantarana feo ho an’ny haut-parleurs.'
    },
    astuce: {
      fr: 'Évitez la surchauffe de l’amplificateur pour prolonger sa durée de vie.',
      mg: 'Aza afangaro ny hafanana be loatra mba haharetan’ny amplifikatera.'
    }
  },
  {
    nom: { fr: 'Éclairage LED', mg: 'Jiro LED' },
    image: 'images/eclairage_led.png',
    role: {
      fr: 'Éclaire avec une haute efficacité énergétique.',
      mg: 'Manome fahazavana miaraka amin’ny fahombiazan’ny angovo avo.'
    },
    astuce: {
      fr: 'Remplacez les ampoules LED défectueuses pour une meilleure visibilité.',
      mg: 'Soloina ny jiro LED simba mba hahazoana fahazavana tsara kokoa.'
    }
  },
  {
    nom: { fr: 'Câble audio', mg: 'Câble audio' },
    image: 'images/cable_audio.png',
    role: {
      fr: 'Transporte le signal sonore des appareils vers les haut-parleurs.',
      mg: 'Mampita ny famantarana feo avy amin’ny fitaovana mankany amin’ny haut-parleurs.'
    },
    astuce: {
      fr: 'Vérifiez la qualité du câble pour éviter les interférences.',
      mg: 'Zahao tsara ny kalitaon’ny câble mba hisorohana ny fanelingelenana.'
    }
  },
  {
    nom: { fr: 'Capteur de température', mg: 'Capteur hafanana' },
    image: 'images/capteur_temperature.png',
    role: {
      fr: 'Mesure la température des composants du moteur et d’autres systèmes.',
      mg: 'Mandrefy ny hafanan’ny singa amin’ny motera sy rafitra hafa.'
    },
    astuce: {
      fr: 'Surveillez les lectures de température pour éviter la surchauffe.',
      mg: 'Araho maso ny maripana mba hisorohana ny hafanana be loatra.'
    }
  },
  {
    nom: { fr: 'Ventilateur', mg: 'Ventilatera' },
    image: 'images/ventilateur.png',
    role: {
      fr: 'Aide à refroidir le moteur et d’autres composants.',
      mg: 'Manampy amin’ny fampangatsiahana ny motera sy singa hafa.'
    },
    astuce: {
      fr: 'Vérifiez le bon fonctionnement du ventilateur pour éviter la surchauffe.',
      mg: 'Zahao tsara ny asan’ny ventilatera mba hisorohana ny hafanana.'
    }
  },
  {
    nom: { fr: 'Jeux de lumière', mg: 'Fampisehoana hazavana' },
    image: 'images/jeux_de_lumiere.png',
    role: {
      fr: 'Crée des effets lumineux pour l’ambiance du véhicule.',
      mg: 'Mamorona vokatra hazavana ho an’ny atmosfera ao anaty fiara.'
    },
    astuce: {
      fr: 'Choisissez des lumières adaptées pour un éclairage agréable.',
      mg: 'Mifidiana jiro mifanaraka amin’ny toerana mba ho manintona ny hazavana.'
    }
  },
  {
    nom: { fr: 'Système d’éclairage', mg: 'Rafitra hazavana' },
    image: 'images/systeme_eclairage.png',
    role: {
      fr: 'Assure une bonne visibilité à l’intérieur et à l’extérieur du véhicule.',
      mg: 'Miantoka ny fahitana tsara ao anatiny sy ivelan’ny fiara.'
    },
    astuce: {
      fr: 'Remplacez les ampoules grillées rapidement pour la sécurité.',
      mg: 'Soloina avy hatrany ny jiro may mba ho azo antoka ny fiara.'
    }
  },
 {
    nom: { fr: 'Plaquettes de frein', mg: 'Plaquette frein' },
    image: 'images/plaquettes_frein.png',
    role: {
      fr: 'Appuient sur le disque de frein pour ralentir le véhicule.',
      mg: 'Mila ny disque frein mba hampihena ny hafainganam-pandehan’ny fiara.'
    },
    astuce: {
      fr: 'Vérifiez et remplacez les plaquettes de frein usées pour une sécurité optimale.',
      mg: 'Zahao sy soloina ny plaquette raha efa tsy tsara intsony mba ho azo antoka.'
    }
  },
  {
    nom: { fr: 'Disque de frein', mg: 'Disque frein' },
    image: 'images/disque_frein.png',
    role: {
      fr: 'Élément contre lequel les plaquettes frottent pour arrêter le véhicule.',
      mg: 'Singa izay isintonan’ny plaquette mba hampijanona ny fiara.'
    },
    astuce: {
      fr: 'Remplacez le disque de frein si vous constatez des vibrations ou une usure excessive.',
      mg: 'Soloina ny disque raha tsikaritrao fa mihozongozona na lany antoka.'
    }
  },
  {
    nom: { fr: 'Moyeu de roue', mg: 'Moyeu kodiarana' },
    image: 'images/moyeu_roue.png',
    role: {
      fr: 'Supporte le poids du véhicule et permet à la roue de tourner.',
      mg: 'Mitondra ny lanjan’ny fiara ary mamela ny kodiarana hivadika.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement le jeu dans les moyeux de roue pour éviter des bruits ou une usure prématurée.',
      mg: 'Zahao ny slack amin’ny moyeu mba hisorohana ny tabataba na ny fahasimbana mialoha ny fotoana.'
    }
  },
  {
    nom: { fr: 'Liquide de frein', mg: 'Rano frein' },
    image: 'images/liquide_frein.png',
    role: {
      fr: 'Transmet la force de freinage depuis la pédale jusqu’aux freins eux-mêmes.',
      mg: 'Mampita ny hery frein avy amin’ny pédale mankany amin’ny frein.'
    },
    astuce: {
      fr: 'Changez le liquide de frein tous les 2 ans pour éviter la formation de bulles d’air.',
      mg: 'Alao isaky ny roa taona ny rano frein mba hisorohana ny famoronana rivotra.'
    }
  },
  {
    nom: { fr: 'Maître-cylindre de frein', mg: 'Cylindre frein lehibe' },
    image: 'images/maitre_cylindre_frein.png',
    role: {
      fr: 'Transforme la pression du pied en force hydraulique pour activer les freins.',
      mg: 'Manova ny tsindry avy amin’ny tongotra ho hery hydraulique hanerena ny frein.'
    },
    astuce: {
      fr: 'Remplacez-le en cas de fuite pour un freinage sûr.',
      mg: 'Soloina raha misy fivoahana mba hahazoana antoka ny freinage.'
    }
  },
  {
    nom: { fr: 'Amplificateur de freinage (Servofrein)', mg: 'Servofrein' },
    image: 'images/servofrein.png',
    role: {
      fr: 'Aide à amplifier la force de freinage appliquée par le conducteur.',
      mg: 'Manampy amin’ny fanamafisana ny herin’ny frein ampiharina amin’ny mpamily.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement son fonctionnement pour un freinage plus efficace.',
      mg: 'Zahao ny fiasan’izy io tsy tapaka mba ho tsara ny freinage.'
    }
  },
  {
    nom: { fr: 'Système d’éclairage', mg: 'Rafitra hazavana' },
    image: 'images/systeme_eclairage.png',
    role: {
      fr: 'Assure une bonne visibilité à l’intérieur et à l’extérieur du véhicule.',
      mg: 'Miantoka ny fahitana tsara ao anatiny sy ivelan’ny fiara.'
    },
    astuce: {
      fr: 'Remplacez les ampoules grillées rapidement pour la sécurité.',
      mg: 'Soloina avy hatrany ny jiro may mba ho azo antoka ny fiara.'
    }
  },
  {
    nom: { fr: 'Bloc-moteur', mg: 'Blokin-moteur' },
    image: 'images/bloc_moteur.png',
    role: {
      fr: 'Composant principal du moteur qui abrite les cylindres et d\'autres éléments.',
      mg: 'Singa lehibe amin’ny motera izay mitahiry ny cylinders sy ireo singa hafa.'
    },
    astuce: {
      fr: 'Surveillez les fuites d\'huile et les températures anormales.',
      mg: 'Zahao raha misy fivoahan\'ny menaka sy ny hafanana tsy ara-dalàna.'
    }
  },
  {
    nom: { fr: 'Cylindres', mg: 'Cylindra' },
    image: 'images/cylindres.png',
    role: {
      fr: 'Chambres où le carburant est brûlé pour créer de l\'énergie.',
      mg: 'Efitrano ahafahan\'ny solika may mba hamokatra angovo.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement l\'état des cylindres et des segments de piston pour maintenir l\'efficacité du moteur.',
      mg: 'Zahao tsy tapaka ny cylinders sy ny singa piston mba hitazonana ny herin’ny motera.'
    }
  },
  {
    nom: { fr: 'Pistons', mg: 'Piston' },
    image: 'images/pistons.png',
    role: {
      fr: 'Convertissent l\'énergie des gaz brûlés en mouvement mécanique.',
      mg: 'Manova ny angovo avy amin’ny entona may ho hetsika mekanika.'
    },
    astuce: {
      fr: 'Assurez-vous que les pistons ne montrent pas de signes d’usure ou de fissures.',
      mg: 'Ataovy azo antoka fa tsy simba na vaky ny pistons.'
    }
  },
  {
    nom: { fr: 'Bielle', mg: 'Biella' },
    image: 'images/bielle.png',
    role: {
      fr: 'Relie le piston à l\'arbre à vilebrequin et transmet la force.',
      mg: 'Mampifandray ny piston amin’ny vili-vilebrekiny ary mampita ny hery.'
    },
    astuce: {
      fr: 'Vérifiez l\'alignement et l\'usure des bielles pour éviter des vibrations.',
      mg: 'Zahao ny fitoviana sy ny fahasimbana mba hisorohana ny hovitrovitra.'
    }
  },
  {
    nom: { fr: 'Soupapes', mg: 'Valva' },
    image: 'images/soupapes.png',
    role: {
      fr: 'Régulent l\'admission du mélange air/carburant et l\'évacuation des gaz brûlés.',
      mg: 'Mifehy ny fidiran’ny fangaro rivotra/solika sy ny fivoahan’ny entona may.'
    },
    astuce: {
      fr: 'Surveillez les jeux des soupapes pour garantir une combustion efficace.',
      mg: 'Zahao tsy tapaka ny halavan’ny valva mba hahazoana antoka ny fitrandrahana tsara.'
    }
  },
  {
    nom: { fr: 'Arbre à cames', mg: 'Cames' },
    image: 'images/arbre_cames.png',
    role: {
      fr: 'Commande l’ouverture et la fermeture des soupapes.',
      mg: 'Mifehy ny fisokafan’ny sy famaranan’ny valva.'
    },
    astuce: {
      fr: 'Vérifiez l\'usure et l\'alignement de l\'arbre à cames.',
      mg: 'Zahao tsy tapaka ny fahasimbana sy ny fitovian’ny cames.'
    }
  },
  {
    nom: { fr: 'Réservoir de carburant', mg: 'Fitahirizan-tsolika' },
    image: 'images/reservoir_carburant.png',
    role: {
      fr: 'Stocke le carburant nécessaire au moteur.',
      mg: 'Mitahiry ny solika ilain’ny motera.'
    },
    astuce: {
      fr: 'Nettoyez régulièrement le réservoir pour éviter les dépôts de saleté.',
      mg: 'Diovy tsy tapaka ny fitoeran-tsolika mba hisorohana ny fahalotoan’ny sisa.'
    }
  },
  {
    nom: { fr: 'Pompe à carburant', mg: 'Paompy solika' },
    image: 'images/pompe_carburant.png',
    role: {
      fr: 'Transporte le carburant du réservoir vers le moteur.',
      mg: 'Mampita ny solika avy amin’ny fitoeran-tsolika mankany amin’ny motera.'
    },
    astuce: {
      fr: 'Remplacez la pompe si vous remarquez une baisse de performance ou des bruits anormaux.',
      mg: 'Soloina ny paompy raha tsikaritrao fa mihena ny heriny na misy tabataba tsy ara-dalàna.'
    }
  },
  {
    nom: { fr: 'Radiateur', mg: 'Radiatera' },
    image: 'images/radiateur.png',
    role: {
      fr: 'Évacue la chaleur du moteur pour éviter la surchauffe.',
      mg: 'Manala ny hafanana amin’ny motera mba tsy ho tratry ny hafanana be loatra.'
    },
    astuce: {
      fr: 'Vérifiez les niveaux de liquide de refroidissement pour assurer un bon fonctionnement.',
      mg: 'Zahao ny haavon’ny rano mangatsiaka mba hahazoana antoka ny asa tsara.'
    }
  },
  {
    nom: { fr: 'Ventilateur', mg: 'Ventilatera' },
    image: 'images/ventilateur.png',
    role: {
      fr: 'Aide à refroidir le moteur en augmentant le flux d’air.',
      mg: 'Manampy amin’ny fampangatsiahana ny motera amin’ny fampitomboana ny fivezivezen’ny rivotra.'
    },
    astuce: {
      fr: 'Assurez-vous que le ventilateur tourne librement sans obstruction.',
      mg: 'Ataovy azo antoka fa mihodina malalaka ny ventilatera, tsy misy sakana.'
    }
  },
  {
    nom: { fr: 'Thermostat', mg: 'Termostaty' },
    image: 'images/thermostat.png',
    role: {
      fr: 'Régule la température du moteur en contrôlant le débit de liquide de refroidissement.',
      mg: 'Mifehy ny hafanan’ny motera amin’ny alalan’ny fandrindrana ny fivezivezen’ny rano mangatsiaka.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement son fonctionnement pour éviter la surchauffe ou un refroidissement excessif.',
      mg: 'Zahao tsy tapaka ny asany mba hisorohana ny hafanana be loatra na ny mangatsiaka tafahoatra.'
    }
  },
  {
    nom: { fr: 'Durites', mg: 'Horona' },
    image: 'images/durites.png',
    role: {
      fr: 'Transportent le liquide de refroidissement, le carburant ou l’air à travers le moteur.',
      mg: 'Mampita rano mangatsiaka, solika na rivotra manerana ny motera.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement les fuites ou les fissures dans les durites.',
      mg: 'Zahao tsy tapaka raha misy fivoahana na triatra amin’ny horona.'
    }
  },
  {
    nom: { fr: 'Bobine d\'allumage', mg: 'Bobina fampirehetana' },
    image: 'images/bobine_allumage.png',
    role: {
      fr: 'Transforme le courant basse tension en haute tension pour les bougies.',
      mg: 'Manova ny herinaratra ambany ho herinaratra avo ho an’ny bougie.'
    },
    astuce: {
      fr: 'Remplacez la bobine si le moteur a des ratés d\'allumage ou des difficultés de démarrage.',
      mg: 'Soloina ny bobina raha misy tsy fetezana na fahasarotana amin’ny fikasihana.'
    }
  },
  {
    nom: { fr: 'Câbles haute tension', mg: 'Tariby avo' },
    image: 'images/cables_haute_tension.png',
    role: {
      fr: 'Acheminent la haute tension de la bobine aux bougies d’allumage.',
      mg: 'Mampita ny herinaratra avo avy amin’ny bobina mankany amin’ny bougie.'
    },
    astuce: {
      fr: 'Vérifiez les câbles pour éviter les décharges et assurez-vous qu’ils ne sont pas usés.',
      mg: 'Zahao ny tariby mba hisorohana ny fivoahan’ny herinaratra sy ny fahasimbana.'
    }
  },
  {
    nom: { fr: 'Collecteur d\'échappement', mg: 'Fitahirizan\'ny entona' },
    image: 'images/collecteur_echappement.png',
    role: {
      fr: 'Recueille les gaz d’échappement provenant des cylindres et les dirige vers le système d’échappement.',
      mg: 'Manangona ny entona avy amin’ny cylinders ary mitarika izany mankany amin’ny rafitra fandefasana.'
    },
    astuce: {
      fr: 'Assurez-vous que le collecteur n’a pas de fuites qui pourraient affecter les performances du moteur.',
      mg: 'Ataovy azo antoka fa tsy misy fivoahan’entona ny fitahirizana mba tsy hisy fiantraikany amin’ny motera.'
    }
  },
  {
    nom: { fr: 'Tuyau d\'échappement', mg: 'Fantsona fandefasana entona' },
    image: 'images/tuyau_echappement.png',
    role: {
      fr: 'Permet l\'évacuation des gaz brûlés du moteur vers l’extérieur.',
      mg: 'Manala ny entona may avy amin’ny motera mankany ivelany.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement l’état du tuyau pour éviter les fuites ou la rouille.',
      mg: 'Zahao tsy tapaka ny fivoahana sy ny harafesina amin’ny fantsona.'
    }
  },
  {
    nom: { fr: 'Catalyseur', mg: 'Catalyseur' },
    image: 'images/catalyseur.png',
    role: {
      fr: 'Réduit les émissions polluantes en transformant les gaz nocifs en gaz moins dangereux.',
      mg: 'Manampy amin’ny fampihenana ny fandotoana amin’ny fanovana ny entona manimba ho entona tsy manimba.'
    },
    astuce: {
      fr: 'Remplacez le catalyseur si vous remarquez une baisse des performances du moteur ou une augmentation des émissions.',
      mg: 'Soloina ny catalyseur raha hitanao fa mihena ny herin’ny motera na miakatra ny fandotoana.'
    }
  },
  {
    nom: { fr: 'Batterie', mg: 'Bateria' },
    image: 'images/batterie.png',
    role: {
      fr: 'Fournit l’énergie nécessaire pour démarrer le moteur et alimenter les composants électriques.',
      mg: 'Manome angovo ilaina amin’ny fikasihan’ny motera sy ny singa elektrika.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement la charge de la batterie et les bornes pour éviter les pannes.',
      mg: 'Zahao tsy tapaka ny famahanana sy ny fifandraisana amin’ny bateria mba hisorohana ny fahatapahana.'
    }
  },
  {
    nom: { fr: 'Alternateur', mg: 'Alternatera' },
    image: 'images/alternateur.png',
    role: {
      fr: 'Recharge la batterie pendant que le moteur est en marche et alimente les systèmes électriques.',
      mg: 'Mameno bateria rehefa mandeha ny motera ary manome hery ny rafitra elektrika.'
    },
    astuce: {
      fr: 'Vérifiez l’alternateur s’il y a des problèmes de démarrage ou une baisse d’intensité des lumières.',
      mg: 'Zahao ny alternatera raha misy olana amin’ny fampirehetana na mihena ny famirapiratan’ny jiro.'
    }
  },
  {
    nom: { fr: 'Compresseur (moteurs suralimentés)', mg: 'Komprimera' },
    image: 'images/compresseur.png',
    role: {
      fr: 'Augmente la pression de l’air admis dans le moteur pour améliorer les performances.',
      mg: 'Mampitombo ny tsindry rivotra amin’ny motera mba hampitombo ny heriny.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement la courroie du compresseur et assurez-vous qu’il n’y a pas de fuite d’air.',
      mg: 'Zahao tsy tapaka ny tady amin’ny komprimera ary ataovy azo antoka fa tsy misy fivoahan’ny rivotra.'
    }
  },
  {
    nom: { fr: 'Turbocompresseur', mg: 'Turbokomprimera' },
    image: 'images/turbocompresseur.png',
    role: {
      fr: 'Utilise les gaz d’échappement pour compresser l’air et augmenter les performances du moteur.',
      mg: 'Mampiasa ny entona fandefasana mba hamoretana ny rivotra ary hampitombo ny herin’ny motera.'
    },
    astuce: {
      fr: 'Assurez-vous que le turbocompresseur fonctionne bien pour éviter la perte de puissance et de surchauffe.',
      mg: 'Ataovy azo antoka fa miasa tsara ny turbokomprimera mba tsy ho very hery sy hisorohana ny hafanana be loatra.'
    }
  },
  {
    nom: { fr: 'Vase d\'expansion', mg: 'Vazy famoahana' },
    image: 'images/vase_expansion.png',
    role: {
      fr: 'Permet de stocker le liquide de refroidissement en excès et de compenser les variations de température.',
      mg: 'Mitaiza ny rano mangatsiaka sisa ary manitsy ny fiovan’ny mari-pana.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement le niveau du liquide dans le vase d’expansion.',
      mg: 'Zahao tsy tapaka ny haavon’ny rano ao amin’ny vazy famoahana.'
    }
  },
  {
    nom: { fr: 'Fusibles et relais', mg: 'Fuse sy relay' },
    image: 'images/fusibles_relais.png',
    role: {
      fr: 'Protègent les circuits électriques en cas de surcharge et contrôlent l’alimentation de certains composants.',
      mg: 'Miaro ny lalana elektrika raha misy be loatra ny hery ary mifehy ny famahanana ny singa sasany.'
    },
    astuce: {
      fr: 'Remplacez immédiatement tout fusible grillé pour éviter des pannes.',
      mg: 'Soloina haingana raha simba ny fuse mba hisorohana ny fahasimbana.'
    }
  },
  {
    nom: { fr: 'Cardans', mg: 'Cardan' },
    image: 'images/cardans.png',
    role: {
      fr: 'Transmettent la puissance du moteur aux roues tout en permettant le mouvement des suspensions.',
      mg: 'Mampita ny herin’ny motera amin’ny kodiarana ary mamela ny fihetsiky ny suspension.'
    },
    astuce: {
      fr: 'Vérifiez l’état des soufflets de cardan pour éviter les fuites de graisse.',
      mg: 'Zahao ny toe-javatra amin’ny fonon’ny cardan mba tsy hisy fivoahan’ny menaka.'
    }
  },
  {
    nom: { fr: 'Suspension', mg: 'Fijanonana' },
    image: 'images/suspension.png',
    role: {
      fr: 'Absorbe les chocs de la route pour offrir une conduite plus confortable.',
      mg: 'Mandray ny dona amin’ny lalana mba hampahazo aina ny fitondrana.'
    },
    astuce: {
      fr: 'Surveillez l’usure des amortisseurs et remplacez-les si nécessaire.',
      mg: 'Araho maso ny fahanteran’ny amortisseur ary soloina raha ilaina.'
    }
  },
  {
    nom: { fr: 'Rampe d\'injection', mg: 'Rampy famoahana solika' },
    image: 'images/rampe_injection.png',
    role: {
      fr: 'Distribue le carburant à haute pression aux injecteurs pour la combustion dans le moteur.',
      mg: 'Mizara solika amin’ny tsindry avo amin’ny injecteur ho an’ny fandoroana.'
    },
    astuce: {
      fr: 'Nettoyez régulièrement la rampe d’injection pour éviter l’encrassement.',
      mg: 'Diovy tsy tapaka ny rampy mba tsy handotoana azy.'
    }
  },
  {
    nom: { fr: 'Régulateur de pression de carburant', mg: 'Fifehezana tsindry solika' },
    image: 'images/regulateur_pression.png',
    role: {
      fr: 'Maintient une pression constante de carburant dans le système d’injection.',
      mg: 'Mitazona tsindry tsy miova amin’ny rafitra fampidirana solika.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement le régulateur pour éviter les fluctuations de pression.',
      mg: 'Zahao tsy tapaka ny fifehezana mba tsy hisy fiovam-pihetsika amin’ny tsindry.'
    }
  },
  {
    nom: { fr: 'Actuateurs', mg: 'Actuatera' },
    image: 'images/actuateurs.png',
    role: {
      fr: 'Convertissent les signaux électriques en mouvements mécaniques pour différents systèmes du véhicule.',
      mg: 'Manova ny famantarana elektrika ho fihetsehana mekanika ho an’ny rafitra isan-karazany.'
    },
    astuce: {
      fr: 'Assurez-vous que les actuateurs fonctionnent correctement pour éviter les dysfonctionnements.',
      mg: 'Ataovy azo antoka fa mandeha tsara ny actuatera mba hisorohana ny tsy fetezana.'
    }
  },
  {
    nom: { fr: 'Différentiel', mg: 'Differentiela' },
    image: 'images/differentiel.png',
    role: {
      fr: 'Permet aux roues de tourner à des vitesses différentes en virage pour une meilleure maniabilité.',
      mg: 'Mamela ny kodiarana hihodina amin’ny hafainganam-pandeha samihafa amin’ny fihodinana mba hahazoana fifehezana tsara kokoa.'
    },
    astuce: {
      fr: 'Vérifiez et remplacez l’huile du différentiel selon les recommandations du constructeur.',
      mg: 'Zahao ary soloina ny menaky ny differentiela araka ny torolalan’ny mpanamboatra.'
    }
  },
  {
    nom: { fr: 'Arbre de transmission', mg: 'Vatan\'ny fampitana' },
    image: 'images/arbre_transmission.png',
    role: {
      fr: 'Transmet la puissance du moteur aux roues motrices.',
      mg: 'Mampita ny herin’ny motera amin’ny kodiarana mpamily.'
    },
    astuce: {
      fr: 'Surveillez les vibrations ou bruits inhabituels pour prévenir les dommages sur l’arbre de transmission.',
      mg: 'Araho maso ny hovitrovitra na feo hafahafa mba hisorohana ny fahasimbana amin’ny vatana fampitana.'
    }
  },
  {
    nom: { fr: 'Carter d\'huile', mg: 'Fitoeran-tsolika' },
    image: 'images/carter_huile.png',
    role: {
      fr: 'Stocke l’huile du moteur et la renvoie pour la lubrification des composants.',
      mg: 'Mitahiry ny menaky ny motera ary mampita izany ho an’ny fitotoana ny singa.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement les fuites d’huile et maintenez le niveau correct dans le carter.',
      mg: 'Zahao tsy tapaka ny fivoahan’ny menaka ary ataovy tsara ny haavon’ny menaka ao anaty fitoerana.'
    }
  },
  {
    nom: { fr: 'Filtre à huile', mg: 'Sivana menaka' },
    image: 'images/filtre_huile.png',
    role: {
      fr: 'Filtre l\'huile moteur pour éliminer les impuretés et protéger le moteur.',
      mg: 'Misivana ny menaky ny motera mba hanesorana ny loto ary hiaro ny motera.'
    },
    astuce: {
      fr: 'Remplacez le filtre à huile lors de chaque vidange.',
      mg: 'Soloina ny sivana menaka rehefa miova menaka.'
    }
  },
  {
    nom: { fr: 'Courroie accessoire', mg: 'Fehikibo fanampiny' },
    image: 'images/courroie_accessoire.png',
    role: {
      fr: 'Transmet la puissance à divers composants comme l\'alternateur, la pompe à eau, et la pompe de direction assistée.',
      mg: 'Mampita herinaratra amin’ny singa maro toy ny alternatera, paompy rano ary paompy fitarihana.'
    },
    astuce: {
      fr: 'Surveillez les craquelures ou l’usure et remplacez la courroie si nécessaire.',
      mg: 'Araho maso ny triatra na fahanterana ary soloina raha ilaina.'
    }
  },
  {
    nom: { fr: 'Volant moteur', mg: 'Volana motera' },
    image: 'images/volant_moteur.png',
    role: {
      fr: 'Stocke l\'énergie cinétique et assure une liaison entre l\'embrayage et le moteur.',
      mg: 'Mitahiry ny hery cinetika ary mampifandray ny embrayage amin’ny motera.'
    },
    astuce: {
      fr: 'Si des vibrations apparaissent lors des changements de vitesse, vérifiez l’état du volant moteur.',
      mg: 'Raha misy hovitrovitra amin’ny fiovan’ny hafainganam-pandeha, zahao ny volana motera.'
    }
  },
  {
    nom: { fr: 'Injecteur de carburant', mg: 'Injecteuran-tsolika' },
    image: 'images/injecteur_carburant.png',
    role: {
      fr: 'Permet une injection précise du carburant dans le moteur pour une combustion optimale.',
      mg: 'Mampiditra tsara ny solika ao amin’ny motera mba handoro tsara.'
    },
    astuce: {
      fr: 'Nettoyez régulièrement les injecteurs pour éviter l’encrassement.',
      mg: 'Diovy tsy tapaka ny injecteur mba hisorohana ny fandotoana.'
    }
  },
  {
    nom: { fr: 'Capteur d’oxygène (sonde lambda)', mg: 'Sensa oksizena' },
    image: 'images/capteur_oxygene.png',
    role: {
      fr: 'Mesure le taux d\'oxygène dans les gaz d\'échappement pour ajuster le mélange air/carburant.',
      mg: 'Mandrefy ny habetsaky ny oksizena ao amin’ny setroka fandoroana mba hanitsiana ny fifangaroan’ny rivotra sy ny solika.'
    },
    astuce: {
      fr: 'Remplacez le capteur si vous remarquez une surconsommation de carburant.',
      mg: 'Soloina ny sensa raha misy fihinanana solika mihoatra.'
    }
  },
  {
    nom: { fr: 'Boîte de vitesses', mg: 'Boaty hafainganam-pandeha' },
    image: 'images/boite_vitesses.png',
    role: {
      fr: 'Transmet et module la puissance du moteur aux roues motrices en fonction de la vitesse.',
      mg: 'Mampita sy manitsy ny herin’ny motera amin’ny kodiarana mpamily araka ny hafainganam-pandeha.'
    },
    astuce: {
      fr: 'Vérifiez régulièrement l\'état de l\'huile de boîte de vitesses.',
      mg: 'Zahao tsy tapaka ny toe-javatra amin’ny menaky ny boaty hafainganam-pandeha.'
    }
  },
  {
    nom: { fr: 'Capteur de vitesse', mg: 'Sensa hafainganam-pandeha' },
    image: 'images/capteur_vitesse.png',
    role: {
      fr: 'Mesure la vitesse de rotation des roues pour ajuster divers paramètres du véhicule.',
      mg: 'Mandrefy ny hafainganam-pandehan’ny fihodinana ny kodiarana mba hanitsiana ny singa hafa amin’ny fiara.'
    },
    astuce: {
      fr: 'Remplacez le capteur en cas de dysfonctionnement pour éviter des erreurs de lecture.',
      mg: 'Soloina ny sensa raha misy tsy fetezana mba hisorohana ny fahadisoana amin’ny fanaraha-maso.'
    }
  },
  {
    nom: { fr: 'Rétroviseur', mg: 'Fitaratra famerenana' },
    image: 'images/retroviseur.png',
    role: {
      fr: 'Permet au conducteur de voir derrière le véhicule pour une conduite plus sécurisée.',
      mg: 'Mamela ny mpamily hahita any aoriana mba hitondra soa aman-tsara kokoa.'
    },
    astuce: {
      fr: 'Nettoyez régulièrement le rétroviseur pour une meilleure visibilité.',
      mg: 'Diovy tsy tapaka ny fitaratra mba hahazoana fahitana tsara.'
    }
  },
];
// Traductions pour les autres sections
const translations = {
  fr: {
    welcome: 'Bienvenue sur Mek\'app',
    videoTitle: 'Vidéos',
    garageTitle: 'Garages partenaires',
    garageRK: 'Garage RK',
    garageTaloha: 'Garage trano taloha',
    location: 'Lieu',
    phone: 'Numéro Telephone',
    optionsTitle: 'Options',
    darkMode: '🌙 Mode Sombre',
    langToggle: '🌍 Changer de langue',
    aboutTitle: 'À propos',
    aboutText: 'Mek\'app V1.0.0 fait par ANDRIANTSEHENO Rojo Kevin'
  },
  mg: {
    welcome: 'Tongasoa ato amin\'ny Mek\'app',
    videoTitle: 'Lahatsary',
    garageTitle: 'Garazy mpiara-miasa',
    garageRK: 'Garazy RK',
    garageTaloha: 'Garazy trano taloha',
    location: 'Toerana',
    phone: 'Laharana finday',
    optionsTitle: 'Safidy',
    darkMode: '🌙 Fomba maizina',
    langToggle: '🌍 Hanova fiteny',
    aboutTitle: 'Momba ny tena',
    aboutText: 'Mek\'app nataon\'i ANDRIANTSEHENO Rojo Kevin'
  }
};

let currentLang = 'fr';
let isDarkMode = false;

function toggleMenu() {
  const menuItems = document.getElementById('menu-items');
  menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => screen.style.display = 'none');
  document.getElementById(screenId + '-screen').style.display = 'block';
  document.getElementById('home-screen').style.display = 'none';
  toggleMenu();
}

// Mettre à jour le texte des autres sections selon la langue choisie
function updateLanguage() {
  document.querySelector('h1').textContent = translations[currentLang].welcome;
  document.getElementById('video-screen').querySelector('h2').textContent = translations[currentLang].videoTitle;
  document.getElementById('garages-screen').querySelector('h2').textContent = translations[currentLang].garageTitle;
  
  // Mettre à jour les garages
  const garages = document.querySelectorAll('.garage-item');
  garages[0].querySelector('h3').textContent = translations[currentLang].garageRK;
  garages[1].querySelector('h3').textContent = translations[currentLang].garageTaloha;
  garages.forEach(garage => {
    garage.querySelector('p').textContent = `${translations[currentLang].location} : ${garage.dataset.location}`;
    garage.querySelectorAll('p')[1].textContent = `${translations[currentLang].phone} : ${garage.dataset.phone}`;
  });
  
  document.getElementById('options-screen').querySelector('h2').textContent = translations[currentLang].optionsTitle;
  document.getElementById('dark-mode-toggle').textContent = translations[currentLang].darkMode;
  document.getElementById('lang-toggle').textContent = translations[currentLang].langToggle;
  
  document.getElementById('about-screen').querySelector('h2').textContent = translations[currentLang].aboutTitle;
  document.getElementById('about-screen').querySelector('p').textContent = translations[currentLang].aboutText;
}

// Mise à jour des garages avec des données correctes
const garages = [
  { nom: { fr: 'Garage RK', mg: 'Garazy RK' }, location: 'Mandrosoa Ivato', phone: '033 33 333 33' },
  { nom: { fr: 'Garage trano taloha', mg: 'Garazy trano taloha' }, location: 'Bloc 01 Porte 25', phone: '034 34 444 44' }
];

function renderGarages() {
  const garageList = document.getElementById('garage-list');
  garageList.innerHTML = ''; // Clear existing content
  garages.forEach(garage => {
    const garageDiv = document.createElement('div');
    garageDiv.classList.add('garage-item');
    garageDiv.dataset.location = garage.location;
    garageDiv.dataset.phone = garage.phone;
    garageDiv.innerHTML = `
      <h3>${garage.nom[currentLang]}</h3>
      <p>${translations[currentLang].location}: ${garage.location}</p>
      <p>${translations[currentLang].phone}: ${garage.phone}</p>
    `;
    garageList.appendChild(garageDiv);
  });
}
// Remplir la liste des pièces
function renderPieces() {
  const pieceList = document.getElementById('piece-list');
  pieceList.innerHTML = ''; // Vider la liste

  pieces.forEach(piece => {
    const pieceDiv = document.createElement('div');
    pieceDiv.classList.add('piece-item');
    pieceDiv.innerHTML = `
      <img src="${piece.image}" alt="${piece.nom[currentLang]}">
      <h3>${piece.nom[currentLang]}</h3>
      <p>Rôle: ${piece.role[currentLang]}</p>
      <p>Astuce: ${piece.astuce[currentLang]}</p>
    `;
    pieceDiv.onclick = () => showPieceDetails(piece);
    pieceList.appendChild(pieceDiv);
  });
}

function showPieceDetails(piece) {
  const fullscreenDiv = document.createElement('div');
  fullscreenDiv.classList.add('fullscreen');
  fullscreenDiv.innerHTML = `
    <img src="${piece.image}" class="small-image" alt="${piece.nom[currentLang]}">
    <h3>${piece.nom[currentLang]}</h3>
    <p>Rôle: ${piece.role[currentLang]}</p>
    <p>Astuce: ${piece.astuce[currentLang]}</p>
    <button onclick="closeFullscreen()">Fermer</button>
  `;
  document.body.appendChild(fullscreenDiv);
}

function closeFullscreen() {
  const fullscreenDiv = document.querySelector('.fullscreen');
  if (fullscreenDiv) {
    fullscreenDiv.remove();
  }
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.style.backgroundColor = isDarkMode ? '#1E3D59' : '#F5F0E1';
  document.body.style.color = isDarkMode ? '#F5F0E1' : '#1E3D59';
}

function toggleLanguage() {
  currentLang = currentLang === 'fr' ? 'mg' : 'fr';
  renderPieces(); // Mettre à jour les pièces selon la langue
  updateLanguage(); // Mettre à jour les autres sections
}

window.onload = () => {
  renderPieces();
 renderGarages();  // Ajoutez cette ligne pour initialiser les garages
  updateLanguage();
};
