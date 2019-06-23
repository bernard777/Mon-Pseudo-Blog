export class VoitureService {
    voitures = [
        {
            id: 1,
            marqueModel : 'Benz Velo',
            date: 1894,
            vitesseMax: 20,
            nombredexemplaire: 1200,
            commentaire: 'Première voiture produite en série.'
        },
        {
            id: 2,
            marqueModel : 'Jaguar XK120',
            date: 1949,
            vitesseMax: 200.5,
            nombredexemplaire: 12000,
            commentaire: 'Une version modifiée a atteint 219 km/h lors dun test effectué par le pilote dessai de la marque, Ron « Soppy » Sutton4,5. 12 000 modèles produits de 1948 à 1954.'
        },
        {
            id: 3,
            marqueModel : 'Mercedes-Benz 300 SL',
            date: 1955,
            vitesseMax: 256,
            nombredexemplaire: 1400,
            commentaire: 'Certains pilotes ont affirmé pouvoir atteindre 259 km/h. En 2005, un modèle modifié a atteint 240 km/h7. 1 400 exemplaires produits de 1954 à 1957.'
        }
    ];

    addVoiture(marqModel: string, date: number, vitesse: number, nombreExemp: number, comment: string) {
        const voitureObj = {
            id: 0,
            marqueModel: '',
            date: 0,
            vitesseMax: 0,
            nombredexemplaire: 0,
            commentaire: ''
        };

        voitureObj.marqueModel = marqModel;
        voitureObj.date = date;
        voitureObj.vitesseMax = vitesse;
        voitureObj.nombredexemplaire = nombreExemp;
        voitureObj.commentaire = comment;
        voitureObj.id = this.voitures[(this.voitures.length - 1)].id + 1;
        this.voitures.push(voitureObj);
    }
}
