import moment from 'moment';

export default (redeliveries, { cardId, parcelId, startDate, endDate }) => {
    return redeliveries.filter((redelivery) => {
        const cardIdMatch = cardId ? redelivery.cardId.toLowerCase().includes(cardId.toLowerCase()) : true;
        const parcelIdMatch = parcelId ? redelivery.parcelId.toLowerCase().includes(parcelId.toLowerCase()) : true;
        const createdMoment = moment(redelivery.requestDate);
        const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdMoment, 'day') : true;
        const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdMoment, 'day') : true;
        return cardIdMatch && parcelIdMatch && startDateMatch && endDateMatch;
    });
};