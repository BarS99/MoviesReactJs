import React from "react";
import team600 from "../../static/images/team_600.jpg";
import team1200 from "../../static/images/team_1200.jpg";
import { Container } from "react-bootstrap";

const Description = () => {
  return (
    <Container className="my-5">
      <section className="description text-white">
        <h2 className="text-white fw-bold mb-4">A few words about us</h2>
        <div className="description__image mb-4">
          <img
            srcSet={`${team600} 600w, ${team1200} 1200w`}
            sizes="(min-width: 577px) 1200w, 600w"
            src={team1200}
            alt="Group of working people"
            className="d-block img-fluid"
          />
        </div>
        <div className="description__content lh-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet
          convallis nisl, a rhoncus nunc blandit id. Donec sollicitudin ut velit
          vel luctus. Sed pretium faucibus bibendum. Sed id leo quis libero
          laoreet hendrerit. Sed luctus, nunc eu placerat tincidunt, risus
          tortor aliquet ligula, vitae facilisis nibh felis a nibh. Aenean
          placerat dolor ut tempus auctor. In posuere eros ut nisi lobortis
          congue. Fusce et aliquam tortor, eget interdum leo. Phasellus cursus
          metus id magna suscipit, id scelerisque leo feugiat. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nulla sit amet mi purus. Donec vel lacinia neque, at tempus
          ipsum. Nullam gravida varius urna, at molestie urna. Nulla sit amet
          finibus turpis, sed convallis justo. Aenean nibh mauris, venenatis
          fringilla nulla vel, gravida viverra ipsum. Nunc mattis orci a ex
          molestie, ac dignissim neque pellentesque. Nulla dignissim tristique
          enim. Aenean semper pellentesque est, eu euismod enim luctus vel.
          Curabitur sagittis augue vel tellus aliquam, eu sagittis tellus
          ullamcorper. Quisque sed risus tristique est dictum feugiat sed non
          nisi. Sed non dolor massa. Curabitur hendrerit lacus purus. Duis quis
          odio in mauris lacinia scelerisque sed at felis. Mauris venenatis
          elementum velit elementum tincidunt. Ut interdum enim accumsan mi
          commodo venenatis. Morbi at vestibulum odio. Ut tincidunt nisl ut nibh
          tristique malesuada. Sed faucibus ornare lorem, fringilla porttitor
          ante luctus et. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Cras a magna leo. Vestibulum ac
          gravida purus. Aliquam efficitur tincidunt aliquet.
        </div>
      </section>
    </Container>
  );
};

export default Description;
