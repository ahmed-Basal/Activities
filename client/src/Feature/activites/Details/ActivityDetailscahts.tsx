import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router";

export default function ActivityDetailsChat() {
    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    bgcolor: 'primary.main',
                    color: 'white',
                    padding: 2
                }}
            >
                <Typography variant="h6">Chat about this event</Typography>
            </Box>
            <Card>
                <CardContent>
                    <div>
                        <form>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={2}
                                placeholder="Enter your comment (Enter to submit, SHIFT + Enter for new line)"
                            />
                        </form>
                    </div>

                    <Box>
                        <Box sx={{ display: 'flex', my: 2 }}>
                            <Avatar src={'/images/user.png'} alt={'user image'} sx={{ mr: 2 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                    <Typography component={Link} to={`/profiles/username`} variant="subtitle1" sx={{ fontWeight: 'bold', textDecoration: 'none' }}>
                                        Bob
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        2 hours ago
                                    </Typography>
                                </Box>

                                <Typography sx={{ whiteSpace: 'pre-wrap' }}>Comment goes here</Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}
