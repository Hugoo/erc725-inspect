import { ERC725JSONSchema } from '@erc725/erc725.js';

// Used to put UNKNOWN and to deal with missing types in erc725.js
interface Erc725JsonSchemaAll {
  name: string;
  key: string;
  keyType: string;
  valueContent: string;
  valueType: string;
}

export const explainErc725YKey = (
  key: string,
): ERC725JSONSchema | Erc725JsonSchemaAll => {
  switch (key) {
    // LSP4
    case '0xeafec4d89fa9619884b6b89135626455000000000000000000000000abf0613c': {
      return {
        name: 'SupportedStandards:LSP4DigitalCertificate',
        key: '0xeafec4d89fa9619884b6b89135626455000000000000000000000000abf0613c',
        keyType: 'Mapping',
        valueContent: '0xabf0613c',
        valueType: 'bytes',
      };
    }
    case '0x9afb95cacc9f95858ec44aa8c3b685511002e30ae54415823f406128b85b238e': {
      return {
        name: 'LSP4Metadata',
        key: '0x9afb95cacc9f95858ec44aa8c3b685511002e30ae54415823f406128b85b238e',
        keyType: 'Singleton',
        valueContent: 'JSONURL',
        valueType: 'bytes',
      };
    }
    case '0x114bd03b3a46d48759680d81ebb2b414fda7d030a7105a851867accf1c2352e7': {
      return {
        name: 'LSP4Creators[]',
        key: '0x114bd03b3a46d48759680d81ebb2b414fda7d030a7105a851867accf1c2352e7',
        keyType: 'Array',
        valueContent: 'Number',
        valueType: 'uint256',
        elementValueContent: 'Address',
        elementValueType: 'address',
      };
    }
    // LSP3
    case '0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6':
      return {
        name: 'SupportedStandards:LSP3UniversalProfile',
        key: '0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6',
        keyType: 'Mapping',
        valueContent: '0xabe425d6',
        valueType: 'bytes',
      };

    case '0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0':
      return {
        name: 'LSP3IssuedAssets[]',
        key: '0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0',
        keyType: 'Array',
        valueContent: 'Address',
        valueType: 'address',
      };
    case '0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6':
      return {
        name: 'SupportedStandards:ERC725Account',
        key: '0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6',
        keyType: 'Singleton',
        valueContent: '0xafdeb5d6',
        valueType: 'bytes',
      };
    case '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47':
      return {
        name: 'LSP1UniversalReceiverDelegate',
        key: '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47',
        keyType: 'Singleton',
        valueContent: 'Address',
        valueType: 'address',
      };
    case '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5':
      return {
        name: 'LSP3Profile',
        key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
        keyType: 'Singleton',
        valueContent: 'JSONURL',
        valueType: 'bytes',
      };

    default:
      break;
  }

  // If it is not a known key, let's try to decode it

  if (
    key.indexOf(
      '0xeafec4d89fa9619884b6b89135626455000000000000000000000000',
    ) !== -1
  ) {
    return {
      name: 'SupportedStandards:?????????',
      key,
      keyType: 'Mapping',
      valueContent: key.substr(58),
      valueType: 'bytes',
    };
  }

  if (key.indexOf('0x4b80742d0000000082ac0000') !== -1) {
    const address = key.substr(26);

    return {
      name: `AddressPermissions:Permissions:${address}`,
      key,
      keyType: 'AddressMappingWithGrouping',
      valueContent: 'BitArray',
      valueType: 'bytes4',
    };
  }

  if (key.indexOf('0x114bd03b3a46d48759680d81ebb2b414') !== -1) {
    const itemNumber = parseInt(key.substr(34), 10);

    return {
      name: `LSP4Creators[${itemNumber}]`,
      key: key,
      keyType: 'Singleton',
      valueContent: 'Address',
      valueType: 'address',
    };
  }

  return {
    name: 'UNKNOWN',
    key,
    keyType: 'UNKNOWN',
    valueContent: 'UNKNOWN',
    valueType: 'UNKNOWN',
  };

  /*
    Singleton: A simple key.
Array: An array spanning multiple ERC725Y keys.
Mapping: A key that maps two words.
AddressMapping: A key that maps a word to an address.
AddressMappingWithGrouping

*/
};