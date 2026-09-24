import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    to: string;
};

export default function MenuitemLink({ children, to }: Props) {
    return (
        <MenuItem
            component={NavLink}
            to={to}
            sx={{
                display: 'flex',
                gap: 2,
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                color: 'inherit',
                '&.active': {
                    color: 'yellow',
                },
            }}
        >
            {children}
        </MenuItem>
    );
}
