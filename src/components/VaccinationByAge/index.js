import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {ageDetails} = props
  return (
    <div>
      <h1 className="para">Vaccination by age</h1>
      <ResponsiveContainer width={1000} height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={ageDetails}
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#64c2a6" />
            <Cell name="44-60" fill="#f54394" />
            <Cell name="Above 60" fill="#2d87bb" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{padding: 10}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
