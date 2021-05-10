//@ts-nocheck
import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HotelIcon from "@material-ui/icons/Hotel";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { ReduxState } from "../../interfaces";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { setFieldBedroomForm } from "../../actions";
import { saveBedroom, listBedroom } from "../../api/api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    gridmain: {
      height: "93.2vh",
    },

    buttonmain: {
      height: "500px",
      width: "500px",
      margin: "15px",
    },

    floating: {
      position: "fixed",
      right: "25px",
      bottom: "25px",
    },
    table: {
      marginTop: "150px",
      marginRight: "20px",
      marginLeft: "20px",
      minWidth: 650,
    },
  })
);

async function test() {
  const response = await listBedroom();
  console.log(response);
}

function createData(
  number: string,
  type: string,
  bedtype: string,
  capacity: number
) {
  return { number, type, bedtype, capacity };
}

const rows = [
  createData("Frozen yoghurt", "159", "6.0", 24),
  createData("Ice cream sandwich", "237", "9.0", 37),
  createData("Eclair", "262", "16.0", 24),
  createData("Cupcake", "30", "3.7", 67),
  createData("Gingerbrea", "356", "16.0", 49),
];

const Bedroom = ({
  userForm,
  propertyForm,
  reservationForm,
  bedroomForm,
}: any): JSX.Element => {
  let history = useHistory();
  const [openBedroomModal, setOpenBedroomModal] = useState(false);
  const [bedrooms, setBedrooms] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    listBedroom().then((response) => setBedrooms(response.data.data));
  }, []);

  useEffect(() => {
    console.log(bedrooms);
  }, [bedrooms]);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HotelIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hostfy Administrador
          </Typography>
          <Button color="inherit" onClick={() => history.push("/")}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Número</TableCell>
              <TableCell align="right">Tipo de quarto</TableCell>
              <TableCell align="right">Tipo de Cama</TableCell>
              <TableCell align="right">Capacidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {bedrooms && bedrooms.map((row) => (
              <TableRow key={row.number}>
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.bedtype}</TableCell>
                <TableCell align="right">{row.capacity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Fab
        className={classes.floating}
        variant="extended"
        onClick={() => {
          setOpenBedroomModal(true);
        }}
      >
        <AddIcon style={{ marginRight: "10px" }} />
        Cadastrar Quarto
      </Fab>

      <Dialog
        open={openBedroomModal}
        onClose={() => {
          setOpenBedroomModal(false);
        }}
      >
        <DialogTitle>Cadastro de Quarto</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                onChange={(event) => {
                  setFieldBedroomForm("number", event.target.value);
                }}
                autoFocus
                margin="dense"
                placeholder={"Número do quarto"}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(event) => {
                  setFieldBedroomForm("type", event.target.value);
                }}
                autoFocus
                margin="dense"
                placeholder={"Tipo do quarto"}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(event) => {
                  setFieldBedroomForm("bedtype", event.target.value);
                }}
                autoFocus
                margin="dense"
                placeholder={"Tipo de cama"}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(event) => {
                  setFieldBedroomForm("capacity", event.target.value);
                }}
                autoFocus
                margin="dense"
                type="number"
                placeholder={"Capacidade"}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenBedroomModal(false);
            }}
            color="primary"
          >
            Cancelar
          </Button>
          <Button
            onClick={async () => {
              setFieldBedroomForm("propertyId", userForm.propertyId.value);
              await saveBedroom(bedroomForm).then((res) =>{
                setOpenBedroomModal(false)
                history.push("/bedroom")
              }
              );
            }}
            color="primary"
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state: ReduxState): any => {
  return {
    propertyForm: state.signUpForm.propertyForm,
    userForm: state.signUpForm.userForm,
    bedroomForm: state.guestForm.bedroomForm,
    reservationForm: state.guestForm.reservationForm,
  };
};

export default connect(mapStateToProps)(Bedroom);
