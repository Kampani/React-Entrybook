import React from 'react';

const TableHeader = () => {
	return(
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
				<th>Remove</th>
			</tr>
		</thead>
	)
}

const TableBody = ({people, removeChar}) => {
	const rows = people.map((row,index) => {
			return (
				<tr key = {index}>
					<td>{row.name}</td>
					<td>{row.job}</td>
					<td>
						<button onClick = {() => removeChar(index)}> Delete </button>
					</td>
				</tr>
			)
		}) 
	
	return(
		<tbody> 
			{rows} 
		</tbody>
	)
}

class Table extends React.Component {
	render(){
		const {people, removeChar} = this.props

		return (
				<table>
					<TableHeader />
					<TableBody people = {people} removeChar = {removeChar} />
      			</table>
		)
	}

}

export default Table