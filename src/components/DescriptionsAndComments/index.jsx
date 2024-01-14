import React, { useState } from "react";
import {
    useMediaQuery,
    Button
} from "@mui/material"

import * as Tag from './styles/index.js'
import { Root } from "../Global/Root/root_styles.jsx";
import { Close, Comment, Description } from "@mui/icons-material";
import { Textarea } from "@mui/joy";
export const DescriptionsAndComments = ({
    setOPen
}) => {
    const isMobileQuery = useMediaQuery('(max-width:600px)');
    const [value, setValue] = useState('Comments');
    const handleChange = (event, newValue) => {
        if (newValue === 'close') {
            setOPen(false)
        }
        setValue(newValue);
    };
    return (

        <Tag.DialogDetails
            isMobileQuery={isMobileQuery}
        >
            <Tag.MuiPaper
                isMobileQuery={isMobileQuery}
            >
                <Tag.MuiBottomNavigation
                    isMobileQuery={isMobileQuery}
                    value={value}
                    onChange={handleChange}
                >
                    {[{
                        label: 'Comentários',
                        value: 'Comments',
                        icon: <Comment />
                    }, {
                        label: 'Descrições',
                        value: 'Descriptions',
                        icon: <Description />
                    }].map((nav, index) => {
                        return (
                            <Tag.MuiBottomNavigationAction
                                sx={{
                                    borderBottom: value === nav.value &&
                                        `4px solid ${Root.color_button}`
                                }}
                                label={nav.label}
                                value={nav.value}
                                icon={nav.icon}
                            />
                        )
                    })}

                    <Tag.MuiBottomNavigationAction
                        label='close'
                        value={'close'}
                        icon={<Close />}
                    />

                </Tag.MuiBottomNavigation>

                <Tag.MuiBottomTextarea
                    isMobileQuery={isMobileQuery}
                >
                    <Tag.MuiBottomMainTextarea
                        isMobileQuery={isMobileQuery}
                    >
                        <Textarea
                            sx={{ width: 1 }}
                            minRows={1}
                            placeholder={value === 'Descriptions' ? (
                                'Add your new description now'
                            ) : (
                                'Add your new comment now'
                            )}
                        />
                        <Button variant="contained">
                            Bublish
                        </Button>
                    </Tag.MuiBottomMainTextarea>
                </Tag.MuiBottomTextarea>
            </Tag.MuiPaper>
        </Tag.DialogDetails>

    )
}