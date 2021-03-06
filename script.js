var tabulate = function (data,columns) {
  var table = d3.select('#table1')
	var thead = table.append('thead')
	var tbody = table.append('tbody')
    
	thead.append('tr')
	  .selectAll('th')
	    .data(columns)
	    .enter()
	  .append('th')
	    .text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	    .data(data)
	    .enter()
	  .append('tr')

	var cells = rows.selectAll('td')
	    .data(function(row) {
	    	return columns.map(function (column) {
	    		return { column: column, value: row[column] }
	      })
      })
      .enter()
    .append('td')
      .text(function (d) { return d.value })

  return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['Програма/проєкт','Період','"Громада з нуля"','"Навчання з надання послуг і управління інфраструктурою на місцевому рівні"', '"Навчання загального управлінського характеру"', 'Кількість учасників навчання (осіб)', 'Цільові групи учасників навчання ', 'Кількість тергромад, для яких було проведене навчання', 'Назва навчання']
  tabulate(data,columns)
})

var tabulate2 = function (data,columns) {
    var table = d3.select('#table2')

	var thead = table.append('thead')
	var tbody = table.append('tbody')
    
	thead.append('tr')
	  .selectAll('th')
	    .data(columns)
	    .enter()
	  .append('th')
	    .text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	    .data(data)
	    .enter()
	  .append('tr')

	var cells = rows.selectAll('td')
	    .data(function(row) {
	    	return columns.map(function (column) {
	    		return { column: column, value: row[column] }
	      })
      })
      .enter()
    .append('td')
      .text(function (d) { return d.value })

  return table;
}

d3.csv('data2.csv',function (data) {
	var columns = ['Область','Тергромада','Програма-проєкт МТД', 'Тематика', 'Кількість']
  tabulate2(data,columns)
})