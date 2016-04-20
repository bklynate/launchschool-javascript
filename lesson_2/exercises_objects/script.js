var invoices = {
  unpaid: [],
  paid: [],
  add: function(name, amount) {
    this.unpaid.push({
      name: name,
      amount: amount
    });
  },

  totalDue: function() {
    var total = 0;
    for (var i = 0; i < this.unpaid.length; i++) {
      total += this.unpaid[i].amount;
    }
    return total;
  },

  payInvoice: function(name) {
    var paidInvoices = [];
    var unpaidInvoices = [];

    for (var i = 0; i < this.unpaid.length; i++) {
      if (this.unpaid[i].name == name) { this.paid.push(this.unpaid[i]); }
      else { unpaidInvoices.push(this.unpaid[i]); }
    }

    this.unpaid = unpaidInvoices;
  },

  totalPaid: function() {
    var total = 0;
    for (var i = 0; i < this.paid.length; i++) {
      total += this.paid[i].amount;
    }
    return total;
  }
};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);

console.log(invoices.totalDue());
invoices.payInvoice("Slough Digital");
console.log(invoices.paid);
console.log(invoices.unpaid);
console.log(invoices.totalPaid());