import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export const NotFound = ({
    mobile
}) => {
    return (
        <Card
            size="lg"
            variant="plain"
            orientation="horizontal"
            sx={{
                textAlign: 'center',
                maxWidth: '100%',
                width: mobile ? '90%' : 500,
                resize: 'horizontal',
                overflow: 'auto',
            }}
        >
            {!mobile && (
                <CardOverflow
                    variant="solid"
                    color="primary"
                    sx={{
                        flex: '0 0 200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        px: 'var(--Card-padding)',
                    }}
                >
                    <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
                        404
                    </Typography>
                </CardOverflow>
            )}
            <CardContent sx={{ gap: 1.5, minWidth: mobile ? '90%' : 200 }}>
                <AspectRatio  ratio="19/8" objectFit="contain" variant="plain">
                    <img
                    style={{
                        width: mobile&& '100%'
                    }}
                        alt=""
                        src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png"
                    />
                </AspectRatio>
                <CardContent>
                    <Typography level="title-lg">Not Found 404</Typography>
                </CardContent>
                <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                        '--variant-borderWidth': '2px',
                        borderRadius: 40,
                        borderColor: 'primary.500',
                        mx: 'auto',
                    }}
                >
                    Tentar Novamente
                </Button>
            </CardContent>
        </Card>
    );
}