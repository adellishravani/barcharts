import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {genderDetails} = props
  return (
    <div>
      <h1 className="para">Vaccination by gender</h1>
      <ResponsiveContainer width={1000} height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={genderDetails}
            startAngle={0}
            endAngle={180}
            outerRadius="70%"
            innerRadius="30%"
            dataKey="count"
          >
            <Cell name="Male" fill=" #f54394" />
            <Cell name="Female" fill=" #5a8dee" />
            <Cell name="Others" fill="#6c757d" />
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

export default VaccinationByGender
