import { Grid, Button } from "@mui/material";

export default function MaterialGrid() {
  return (
    <Grid container spacing={2}>
      <Grid xs={2}>
        <Button variant="contained" fullWidth>
          1
        </Button>
      </Grid>
      <Grid xs={4}>
        <Button variant="contained" fullWidth>
          2
        </Button>
      </Grid>
      <Grid xs={3}>
        <Button variant="contained" fullWidth>
          3
        </Button>
      </Grid>
      <Grid xs={12}>
        <Button variant="contained" fullWidth>
          4
        </Button>
      </Grid>
    </Grid>
  );
}
