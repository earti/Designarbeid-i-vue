# repoet for Farger og fonter til Nabla

Repoet bruker fontene Poppins, Lato og Zilla Slabs.

Poppins skal brukes for titler og undertitler
Lato skal brukes på undertitler og all brødtekst
Zilla Slabs har hemmelig bruksområde ;)

Fontene er litt begrenset med tanke på fontvekt(hvor thicc skriften er), men jeg tror det skal duge, sjekk ut tailwind.config.js, her ligger alle fargene og fontstørrelser/-regler man skal forholde seg til.

Etterhver kommer det spacing og høyder og bredder på elementer. Notasjonen er litt weird, men korteste versjonen er slik:

I et element, her en div, kan man skrive:
<div class="text-title-1 font-poppins bg-primary-modern-900 text-primary-modern-200">Hei!</div>

Her får teksten den selvdefinerte størrelsen title-1 (som er 56px), fonten Poppins, bakgrunnsfargen primary modern 900, og tekstfargen primary modern DEFAULT. Fargene og tekststørrelsen er definert i tailwind.config.js. Det er ekstremt mye tekst for tilsynelatende lite endringer, men det er verdt det! Det finnes snarveier for å unngå repetisjon på mye, som jeg håper å få implementert snart. Darkmode er også nokså enkelt tror jeg, men det prioriteres ikke enda. 

Lek litt rundt med App.vue og prøv å lage egne komponenter du kan bruke på siden i mappen components.


