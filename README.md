
Ceci est un projet [Next.js](https://nextjs.org/).

  

## Démarrage du projet

  

Premierement, executer la commande:

  

```bash

npm  install

```

Puis

  

```bash

npm  run  dev

```



## Pré-requis
Nous utilisons Appwrite pour la base de données. Vous aurez besoin d'y créer un compte.

Avant de démarrer le projet, rassurer de créer un fichier .env puis renseigner les variables suivantes ( vous trouverez ces variables dans le fichier .env.example)

 - **NEXT_PUBLIC_APPWRITE_ENDPOINT**=https://cloud.appwrite.io/v1
   
  - **NEXT_PUBLIC_APPWRITE_PROJECT_ID**
   
 - **NEXT_PUBLIC_APPWRITE_DATABASE_ID**

## Quelques travaux encore à faire

 - *Ajouter les test unitaires*
 - Intégrer le système de design pour uniformisation (couleurs, dimensions, polices, styles, etc.)
 - Optimiser l'affiche des notes pour les mobiles (gérer la limite de texte à afficher pour le titre/contenu de la note)
 - Optimiser le surlignement des mot clés lors de la recherche.
 - Optimiser le caching et la navigation.
 - Optimiser les icons

