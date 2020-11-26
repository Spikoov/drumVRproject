# Ma Batterie en VR
v1.2.2

Un démo est disponible sur [ce lien](https://spikoov.github.io/drumVRproject)
## Participants :
  Couderc Clément (Rygasary), Boix Victor (JohnSmoothie), Marchioni Jérôme (Spikoov).
## Sujet:
  Ce projet est une reproduction d'une batterie en VR. Il proposera un ensemble d'objets différent sur lesquels l'utilisateur peut venir tapper et ainsi faire de la musique.
## Choix techniques:
  ### Besoins matériels & API's
    - Oculus Quest + manettes
      On choisit l'Oculus Quest car l'utilisation est plus simple pour WebXR et A-Frame.
      
    - A-Frame
      On choisit A-Frame pour créer nos modèles 3D, cela permet de ne pas utiliser un framework lourd comme Unity.
      De plus, A-Frame étant de l'HTML, ça nous permet de l'afficher dans un navigateur
      
    - WebXR
      On choisit WebXR pour l'afficher dans un navigateur.
    
    - Host sur github
      On va host la page web sur grâce au service Github pages.

## Comment l'utiliser ?
  ### Navigateurs supportés
    - Mozilla Firefox v52+
    - Chrome v79+
    - Edge v79+
    - Opera v66+

  ### Casques VR et controlleurs supportés
    - HTC Vive
    - Oculus Quest
    - Oculus Rift
    - Windows Mixed Reality
  
  ### Guide

  - Si vous voulez utilisez le navigateur intégré Firefox Reality : 

    -  Installez Firefox Reality pour votre casque VR en cliquant [ici](https://support.mozilla.org/fr/kb/installer-firefox-reality)
  
  - Sinon 

    - Verifiez que votre Casque accepte bien les sources inconnues (unknown sources)

  - Rendez-vous sur ce [lien](https://spikoov.github.io/drumVRproject)

  - Assurez vous d'avoir votre casque prêt puis cliquez sur le bouton VR
  
    ![VR button Screenshot](https://raw.githubusercontent.com/Spikoov/drumVRproject/main/img/VRbutton.png)

  - Enjoy !

  ## Comment ça marche ?
    
  ### A-Frame

  - Nous utilisons A-Frame pour créer les modèles 3D
    
    A-Frame met à disposition des balises HTML permettant de générer les modèles sur la pages. Il suffit de leur donner la bonne forme, la bonne position et la bonne texture pour rendre ce que l'on veut.

    A-frame permet aussi de gérer certains évenements, tel que le clic de la souris. On se sert de ça pour pouvoir faire sortir un son lors du clic.

    [Lien vers la doc A-Frame](https://aframe.io/docs/)

  ### Collisions + son de la batterie
  
  - Nous utilisons une librairie permettant de gérer les collisisons : *aabb-collider*
  
    Cette librairie permet d'identifier un élément afin que ce dernier agisse d'une manière spécifique lorsqu'un élément précisé entre en collision avec lui, et tout cela en JavaScript

    Ici, nous identifions chaque élément de la batterie (caisse claire, toms, cymballes, ...), et nous faisons jouer le son correspondant lors de l'entrée en collision de l'élément avec les controlleurs de l'utilisateur.

    [Lien vers le dépôt de aabb-collider](https://github.com/supermedium/superframe/commit/c31f34b9f196195f3a383354e3547532b56f182a)
  
  ### Pistes de fond sans batterie
  