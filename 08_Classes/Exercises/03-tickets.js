function solve(array, sortingCriterion){
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    array.forEach(el => {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    });
    
    tickets.sort((a, b) => {
        if(sortingCriterion === 'price'){
            return a.price - b.price;
        }else{
            return a[sortingCriterion].toLowerCase()
            .localeCompare(b[sortingCriterion].toLowerCase());
        }
    })

   return tickets;
}

solve(['Philadelphia|94.20|available',
       'New York City|95.99|available',
       'New York City|95.99|sold',
       'Boston|126.20|departed'],
       'destination');

solve(['Philadelphia|94.20|available',
       'New York City|95.99|available',
       'New York City|95.99|sold',
       'Boston|126.20|departed'],
       'status');