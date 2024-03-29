import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectChildCard({ parentid, childid }) {

 
  const navigate = useNavigate();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [childData, setChildData] = React.useState([]);

  const fetchData = async () => {
    const mainLink = 'https://earlifinance.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/oneparent/${parentid}`);
    setData(res?.data?.data?.children);
  };
  const ChildData = async () => {
    const mainLink = 'https://earlifinance.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/child/${childid}`);
    setChildData(res?.data?.data);
  };

  React.useEffect(() => {
    fetchData();
    ChildData();
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  

  return (
  
    <div>
      <FormControl sx={{ minWidth: 270, mt: 1 }} >
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          style={{
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            fontFamily: 'work sans',
          }}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <span style={{ fontFamily: 'work sans', fontWeight: '600' }}>
                  {childData?.firstname} {childData?.lastname}
                </span>
              );
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {data?.map((props) => (
            <MenuItem
              key={props?._id}
              value={props?.firstname + props?.lastname}
              style={getStyles(props?._id, personName, theme)}
              onClick={() => {
                // navigate(`/dashaccount/${parentid}/${props?._id}`);
                window.location.href = `/dashaccount/${parentid}/${props?._id}`
              }}
            >
              <img
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
                src={props?.image}
                alt="image"
              />
              {props?.firstname} {props?.lastname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
