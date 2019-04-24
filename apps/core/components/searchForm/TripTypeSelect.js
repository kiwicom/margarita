// @flow

import * as React from 'react';
import { Modal, Select } from '@kiwicom/margarita-components';

import { TRIP_TYPE } from '../../scenes/search/SearchConstants';
import {
  withSearchContext,
  type SearchContextState,
} from '../../scenes/search/SearchContext';

type Props = {|
  +isVisible: boolean,
  +onClose: () => void,
  +tripType: string,
  +handleTripTypeSelect: string => void,
|};

class TripTypeSelect extends React.Component<Props> {
  render() {
    const { isVisible, tripType, onClose, handleTripTypeSelect } = this.props;
    return (
      <Modal isVisible={isVisible} onClose={onClose}>
        <Select
          optionsData={TRIP_TYPE}
          selectedType={tripType}
          onSelect={handleTripTypeSelect}
          onClosePress={onClose}
        />
      </Modal>
    );
  }
}

const select = ({ tripType }: SearchContextState) => ({
  tripType,
});

export default withSearchContext(select)(TripTypeSelect);
