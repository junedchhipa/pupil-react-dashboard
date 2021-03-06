import React, { Component } from 'react';
import ListItem from './ListItem';
import FadeAndSlide from '../../../Animations/FadeAndSlide';

class Listings extends Component {

  render() {

    return (
      <div className="property-listings container">
        <FadeAndSlide
          startX={'0px'}
          startY={'-30px'}
          delay={100}
        >
          <ListItem
            title="239 Eastdown Park Road"
            subtitle="SW2 2DH"
            imgSrc={'/assets/images/property3.jpg'}
            status="Offline"
            onEdit={this.props.onEdit}
          />
        </FadeAndSlide>
        <FadeAndSlide
          startX={'0px'}
          startY={'-30px'}
          delay={200}
        >
          <ListItem
            title="239 Eastdown Park Road"
            subtitle="SW2 2DH"
            imgSrc={'/assets/images/property9.png'}
            status="Live"
            onEdit={this.props.onEdit}
          />
        </FadeAndSlide>
        <FadeAndSlide
          startX={'0px'}
          startY={'-30px'}
          delay={300}
        >
          <ListItem
            title="239 Eastdown Park Road"
            subtitle="SW2 2DH"
            imgSrc={'/assets/images/property13.png'}
            status="Live"
            onEdit={this.props.onEdit}
          />
        </FadeAndSlide>
        <FadeAndSlide
          startX={'0px'}
          startY={'-30px'}
          delay={400}
        >
          <ListItem
            title="239 Eastdown Park Road"
            subtitle="SW2 2DH"
            imgSrc={'/assets/images/property4.png'}
            status="Live"
            onEdit={this.props.onEdit}
          />
        </FadeAndSlide>

      </div>
    );
  }
}

export default Listings;
