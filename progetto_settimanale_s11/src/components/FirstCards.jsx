const FirstCards = function ({ des, image }) {
  return (
    <div className="card-item d-flex flex-column justify-content-between h-100">
      <p className="mb-1 fw-bold">NUOVA STAZIONE RADIO</p>
      <p className="fs-5 text-truncate">{des}</p>
      <div className="overflow-hidden rounded-4">
        <img src={image} alt="Foto" className="w-100" />
      </div>
    </div>
  )
}

export default FirstCards
