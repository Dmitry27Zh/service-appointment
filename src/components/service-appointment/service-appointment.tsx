import Select from 'react-select'

function ServiceAppointment(): JSX.Element {
  const renderCategories = () => {
    const options: any[] = []

    return <Select options={options} name="category" />
  }

  return (
    <div className="container">
      <h2 className="mb-5 pt-4 pb-4">Service appointment</h2>
      <div className="row mb-3">
        <div className="col">{renderCategories()}</div>
        <div className="col">{renderCategories()}</div>
      </div>
      <div className="row">
        <div className="col">{renderCategories()}</div>
        <div className="col">{renderCategories()}</div>
      </div>
    </div>
  )
}

export default ServiceAppointment
