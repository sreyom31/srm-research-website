import './flipSub.css';

function flipcardLComittee(props) {
  return (
    <div id="section-plans">
      <div className="card2">
        <div className="card__side2 card__side--front-12">
          <h1 className="name2">{props.committee}</h1>
        </div>
        <div className="card__side2 card__side--back2 card__side--back-12">
          <h1 className="head2">Head of Committee</h1>
          <h2 className="hname2">{props.head}</h2>
          <h1 className="head2">Members of Committee</h1>
          <div className="names2">
            {props.mem &&
              props.mem.map((member) => {
                return (
                  <h1 key={member.id} className="nameBack2">
                    {member.name}
                  </h1>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default flipcardLComittee;
