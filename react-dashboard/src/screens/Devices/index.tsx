import { Box, Grid } from '@mui/material'
import HeroCard from '../../components/HeroCard'
import AirConditionerCard from '../../components/AirConditionerCard'

const Devices = () => {
    return (
        <Box
            width={2 / 3}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ margin: 'auto' }}
        >
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid size={12}>
                    <HeroCard
                        title="Dispositivos"
                        subtitle="Controle seus dispositivos de perto ou de longe!"
                    />
                </Grid>
                <Grid size={4}>
                    <AirConditionerCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Devices
