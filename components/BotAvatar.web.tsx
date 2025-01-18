import { CustomThemeColorsType, CustomThemeType } from '@/utils/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

type BotAvatarProps = {
    height?: number;
    width?: number;
};

const BotAvatar = ({ height = 32, width = 32 }: BotAvatarProps) => {
    const { colors } = useTheme<CustomThemeType>();
    const styles = makeStyles(colors);

    return (
        <View style={styles.botAvatarWrapper}>
            <svg height={height} viewBox="0 0 438 438" width={width} xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M123.8 11c-2.1.6-5.9 2.1-8.5 3.4-2.7 1.3-6.9 4.6-9.4 7.2-2.5 2.7-5.9 7.4-7.5 10.4-2.6 4.9-2.9 6.5-2.9 14.5 0 7.8.4 9.7 2.8 14.5 1.5 3 4.9 8.2 7.6 11.5 2.7 3.3 8.6 9.2 13.2 13 4.5 3.8 8.6 7.2 9.2 7.5.5.3-.4 4.6-2.2 10-1.7 5.2-4.2 13.8-5.6 19-1.4 5.2-2.5 10.8-2.5 12.5 0 1.7 1.7 7.9 3.7 14l3.6 11c-18 41.8-23.3 54.7-23.3 55.5 0 .8.7 2.2 1.7 3.1 1 .9 5 2.2 8.8 2.9 3.8.6 7.5 1.5 8.2 1.8 1 .6 1 3.9.2 15.2-1 13.6-1.8 17.2-12 56.3-9.7 37.3-10.8 42-9.6 44.5.6 1.5 3 3.6 5.2 4.7 3.5 1.7 6.4 2 22 2.3 9.9.2 23.2-.2 29.5-.8 6.3-.6 16-2 21.5-3s10.1-1.7 10.3-1.6c.1 0-.2 4.6-.8 10.1-.6 5.5-1.3 11.2-1.5 12.8-.3 1.7-1.1 2.7-2.2 2.7-1 0-2.6.5-3.6 1.2-1.5 1.1-2.6 6.6-6.2 32.8-2.9 20.9-4 32.1-3.4 33.3.5.9 1.7 1.9 2.7 2.2.9.3 20.4-5.8 43.2-13.4 22.8-7.7 67.8-22.8 100-33.6s59.1-20.2 59.8-20.8c.7-.7 1.3-2.3 1.2-3.7 0-1.6-1.5-3.7-4.3-6.1-2.3-2-7.1-5.7-10.7-8.2-3.6-2.5-9.9-6.1-14-8.1s-10.6-4.3-14.5-5.2c-3.9-.9-7.4-1.8-8-1.9-.6-.1-2.7-10.3-4.7-22.6-2.1-12.3-4.5-28.3-5.4-35.4-1-8.3-1.4-16.3-1-22 .3-4.9 1.7-13.3 3-18.5 1.4-5.2 5.7-19.6 9.6-32 3.9-12.4 8.4-27.7 10-34 1.6-6.3 3.4-15.1 4-19.5.7-4.4 1-12.9.8-19-.3-7.9-1.1-12.8-2.7-17.5-1.2-3.6-4.1-9.4-6.4-12.9-2.3-3.5-6.9-8.9-10.2-11.9-3.3-3-7.8-6.4-10-7.5l-4-2c-82.8 13-107.5 17.3-108.4 18-1.5 1-1.4 2.7.2 18.7.9 9.7 2 18.2 2.3 18.9.3.6 5.7 5.7 12 11.2 6.3 5.5 12.1 11.4 12.9 13 .7 1.7 1.9 5.5 2.6 8.5.8 3.6 1 9.4.6 16.5-.4 6.1-1.5 16-2.6 22-1.1 6.4-2.9 13.1-4.4 16-1.3 2.8-4.4 6.8-6.8 9.1-2.4 2.2-6.6 5.3-9.4 6.9-2.7 1.6-7.9 3.9-11.5 5.1-3.6 1.3-9.9 2.9-14 3.8-4.1.8-13.6 2-21 2.6-8 .7-17 .8-22.3.3l-8.7-.8c0-5 .4-7.6 1-9 .6-1.5 2.3-2.9 4.3-3.5 1.7-.6 5.6-1 8.5-1 3.6 0 7.4 1 12.5 3.2 3.9 1.7 9.2 3.3 11.7 3.6 2.5.3 5.7.2 7.3-.2 1.5-.3 4.3-2.1 6.3-3.8 2-1.8 5-5.9 6.5-9 1.6-3.2 2.7-6.7 2.4-7.8-.3-1.1-1.5-2.3-2.7-2.6-1.3-.4-3.1-.4-4 0-1 .3-2.7 2.5-3.8 4.9-1.1 2.3-2.6 4.9-3.3 5.8-.7.9-2.2 2.1-3.4 2.7-1.9 1-3.3.8-7.5-.7-2.9-1.1-7.8-2.9-10.8-4-3-1.1-8-2-11-2.1-3 0-7 .4-8.7 1l-3.3 1c0-9.7-.5-12.3-1.2-12.7-.7-.4-4.7-1.5-8.8-2.4-5.3-1.1-7.4-2-7.3-3 .2-.8 5-12.3 10.8-25.6L136 160l-8.5-25.9c5.3-19.1 7.6-27 8.6-29.8L138 99c4.7 2.3 9.5 4 13.8 5.2 5.9 1.6 10.7 2.1 20.9 2.2 7.2.1 13.5-.3 14-.8.4-.4 1.1-3.5 1.6-6.7.4-3.2 1.3-7.1 2.1-8.6.7-1.6 3-3.6 5-4.5 2-1 6-1.8 8.9-1.8 2.8 0 9.7-.5 15.2-1 5.5-.6 21.3-3.3 35-6.1 20.8-4.3 26.9-5.2 36.6-5.3 8.7-.1 12-.5 13.3-1.6.9-.8 1.7-2.2 1.7-3 0-.8-1.7-4.9-3.8-9-2.1-4.2-6-9.7-8.8-12.6-2.7-2.8-7.4-6.3-10.2-7.7-2.9-1.5-7.2-3.1-9.5-3.7-2.8-.6-9.5-.6-18.8 0-9.5.7-19 .7-27.5 0-7.1-.6-16.6-1.9-21-2.9-4.4-1.1-16.1-4.9-26-8.6-9.9-3.7-22.1-7.8-27-9.1-4.9-1.4-12.8-2.7-17.5-2.9-4.7-.2-10.2 0-12.2.5z"
                />
                <path
                    d="M304.2 70.3c-.9.8-5.1 1.2-13 1.3-9.8.1-15.8 1-36.7 5.3-13.7 2.8-29.5 5.5-35 6.1-5.5.5-12.4 1-15.2 1-2.9 0-6.9.8-8.9 1.8-2 .9-4.3 2.9-5 4.5-.8 1.5-1.7 5.4-2.1 8.6-.5 3.2-1.2 6.3-1.6 6.7-.5.5-6.8.9-14 .8-10.2-.1-15-.6-20.9-2.2-4.3-1.2-9.1-2.9-10.8-3.7l-3-1.5c-2.9 8.1-5.2 16-7.1 22.8l-3.4 12.3L136 160c-16.3 37.6-21.1 49.1-21.3 49.9-.1 1 2 1.9 7.3 3 4.1.9 8.1 2 8.8 2.4.7.4 1.2 3 1.2 6.7v6c5-1.6 9-2 12-2 3 .1 8 1 11 2.1s7.9 2.9 10.8 4c4.2 1.5 5.6 1.7 7.5.7 1.2-.6 2.7-1.8 3.4-2.7.7-.9 2.2-3.5 3.3-5.8 1.1-2.4 2.8-4.6 3.8-4.9.9-.4 2.7-.4 4 0 1.2.3 2.4 1.5 2.7 2.6.3 1.1-.8 4.6-2.4 7.8-1.5 3.1-4.5 7.2-6.5 9-2 1.7-4.8 3.5-6.3 3.8-1.6.4-4.8.5-7.3.2s-7.8-1.9-11.7-3.6c-5.1-2.2-8.9-3.2-12.5-3.2-2.9 0-6.8.4-8.5 1-2 .6-3.7 2-4.3 3.5-.6 1.4-1 4-1 5.8v3.2c14 1.3 23 1.2 31 .5 7.4-.6 16.9-1.8 21-2.6 4.1-.9 10.4-2.5 14-3.8 3.6-1.2 8.8-3.5 11.5-5.1 2.8-1.6 7-4.7 9.4-6.9 2.4-2.3 5.5-6.3 6.8-9.1 1.5-2.9 3.3-9.6 4.4-16 1.1-6.1 2.2-15.9 2.6-22 .4-7.1.2-12.9-.6-16.5-.7-3-1.9-6.8-2.6-8.5-.8-1.7-6.6-7.5-12.9-13-6.3-5.5-11.7-10.6-12-11.2-.3-.7-1.4-9.2-2.3-18.9-1.6-16-1.7-17.7-.2-18.7.9-.7 25.6-5 55-9.6 51.4-8 53.5-8.3 56.7-6.7 1.7.9 3.2 1.3 3.2.9.1-.5-2-3.6-4.5-7-2.5-3.5-4.6-6.3-4.8-6.3-.2 0-.9.6-1.5 1.3zm-29.5 184.9c-.3.7-1.4 5.1-2.6 9.8-1.2 4.7-4.2 12.8-6.7 18-2.5 5.2-6.5 12.2-8.8 15.5-2.4 3.3-7.9 9.4-12.3 13.5s-11.6 9.6-15.9 12.2c-4.3 2.6-12.4 6.5-17.9 8.7-5.5 2.2-10.4 4.1-11 4.1-.6 0-1.6 4.8-2.2 10.7-.7 6-1.3 11.8-1.3 13 0 1.3.3 2.1.8 1.9.4-.3 18.5-5 40.2-10.5 21.7-5.5 46.6-11.6 55.3-13.6 8.6-1.9 16.8-3.5 18.2-3.5 1.4 0 2.7-.6 3-1.3.3-.6-.5-7.7-1.9-15.7-1.4-8-3-18.3-3.7-23-1.1-7.9-1.5-8.9-5.8-14-2.5-3-8.4-9.5-13.1-14.4-4.7-4.8-9.7-9.7-11.2-10.8-2-1.5-2.8-1.6-3.1-.6z"
                    fill="#fff4ad"
                />
                <path
                    d="M310 344.7c-1.4.3-11.3 2.5-22 4.9-10.7 2.5-31 7.4-45 11-14 3.6-32.3 8.3-40.5 10.6-8.3 2.2-15.1 4.1-15.3 4.2-.1 0-1.7 10.8-3.5 23.8-1.9 14.4-2.8 23.8-2.2 23.8.6 0 41.4-13.6 90.8-30.2 49.3-16.7 89.7-30.5 89.7-30.8 0-.3-2.8-2.4-6.2-4.7-3.5-2.3-9.2-5.6-12.8-7.3-3.6-1.6-9.6-3.7-13.5-4.5-3.9-.8-9.2-1.4-12-1.3-2.7 0-6.1.3-7.5.5z"
                    fill="red"
                />
                <path
                    d="M123 22c-3.2 1.1-7.1 3.5-9.3 5.7-2.1 2.1-4.9 6-6.3 8.8-1.6 3.4-2.4 6.7-2.4 10.3 0 2.8.5 6.4 1.2 7.9.6 1.6 3.1 5.5 5.3 8.8 2.3 3.3 7.3 8.7 11.1 12 3.8 3.4 8.7 7.5 10.9 9.2 2.2 1.7 6.9 4.5 10.5 6.2 3.6 1.7 10 3.8 14.3 4.6 4.2.8 10.6 1.5 14.2 1.5 6.4 0 6.5 0 6.5-2.8 0-1.5.9-4.5 1.8-6.7 1-2.2 3.7-5.6 5.9-7.5 2.2-1.9 5.8-4.1 7.9-4.7 2.1-.7 6.8-1.3 10.4-1.3 3.6 0 10.6-.5 15.5-1 4.9-.6 18.9-3.1 31-5.6 12.1-2.5 26.4-4.8 31.8-5.2 5.3-.4 9.7-1 9.7-1.5 0-.4-2-3.1-4.3-6-2.5-2.9-6.7-6.5-9.8-8.1-4-2.2-6.7-3-10.4-2.9-2.7 0-14 .1-25 .3-14.9.2-22.6-.2-30-1.4-5.7-.9-16.8-4-26-7.2-8.8-3-20.3-7-25.5-8.9-5.2-1.8-13-4-17.3-4.9-4.2-.9-9.6-1.6-11.9-1.6-2.4.1-6.8.9-9.8 2zm134 75.7c-26.1 4.1-47.6 7.6-47.7 7.6-.2.1.3 5.8 1 12.7l1.3 12.5c7.7 6.9 13.3 12.3 17.5 16.5 6.2 6.2 7.8 8.5 9.5 13.5 1.5 4.8 1.9 8.6 1.8 19.5-.1 8.7-.9 18.1-2.3 26.5-1.6 9.7-3 14.8-5.5 20-2.5 5.1-5.1 8.6-9.7 12.8-3.8 3.4-9.7 7.4-14.4 9.7-4.4 2.1-11.4 4.8-15.5 6-4.1 1.1-12.2 2.7-18 3.6-6.4 1-17.6 1.7-28.7 1.8-10.1 0-18.3.3-18.3.6s-4.4 16.8-9.8 36.7c-5.3 20-9.3 36.6-8.9 37 .5.5 4.1 1.1 8 1.5 4 .3 14.9.2 24.2-.2 9.4-.5 21.9-1.6 28-2.5 6.1-.9 15.2-2.8 20.3-4.1 5-1.3 12-3.5 15.5-4.8 3.4-1.3 8.7-3.6 11.7-5.1 3-1.5 8.2-4.6 11.5-6.8 3.3-2.3 8.2-6.1 10.9-8.7 2.7-2.5 6.8-7.2 9.1-10.5s5.6-8.7 7.3-12c1.6-3.3 4.1-9.6 5.5-14 1.4-4.4 3-11 3.6-14.8.9-5.5 1.6-7.1 3.9-8.8 1.9-1.4 3.5-1.8 5.2-1.4 1.4.4 4.5 2.1 7 3.8 2.5 1.7 8.6 7.1 13.6 12.1l9.1 9.1c1-18.3 2.2-25.9 4.1-33.5 1.6-6.3 6.1-21.6 10.1-34 3.9-12.4 8-26.1 9.1-30.5 1.1-4.4 2.7-11.8 3.6-16.5.8-4.7 1.5-12.6 1.5-17.5s-.4-11-1-13.5c-.5-2.5-1.8-6.5-2.9-9-1.1-2.5-3.7-6.8-5.8-9.5-2.1-2.8-5.1-6.1-6.8-7.5-1.6-1.4-4.1-3.3-5.5-4.2-1.4-1-3.3-1.7-4.1-1.7-.8 0-22.9 3.5-49 7.6z"
                    fill="#ffe25b"
                />
                <path
                    d="M274 159.6c-1.9.8-4.7 2.7-6.3 4.2-1.5 1.5-2.7 3.6-2.7 4.7s.5 2.6 1.2 3.3c.7.7 2.3 1.2 3.5 1.2 1.3 0 3.7-1.1 5.3-2.5 1.6-1.4 4.2-2.5 5.8-2.5 1.5-.1 3.9.8 5.5 2 1.5 1.1 2.9 2.9 3.2 4 .3 1.1-1 5.1-3 9.3-2.5 5.1-3.7 9.3-4.3 14.4-.5 5.1-1.3 7.8-2.7 9.3-1.8 2-2.3 2.1-5.8.8-3.4-1.2-3.9-1.1-5.8.7-1.5 1.4-1.9 2.8-1.6 4.5.4 1.6 1.9 3.1 4.1 4.3 2 .9 5.2 1.7 7.1 1.7 2.8 0 4.4-.9 7.9-4.2 2.7-2.7 4.8-5.8 5.5-8.3.6-2.2 1.1-5.9 1.1-8.2 0-2.8 1-6.2 2.8-9.5 1.6-2.9 3.4-6.9 4.1-8.8.9-2.7.9-4.5 0-8-.7-2.9-2.4-5.7-4.8-8-2-1.9-5.4-4.1-7.6-4.7-2.2-.7-5.1-1.3-6.5-1.2-1.4 0-4.1.7-6 1.5z"
                />
            </svg>
        </View>
    );
};

const makeStyles = (colors: CustomThemeColorsType) => StyleSheet.create({
    botAvatarWrapper: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        overflow: 'hidden',
    },
});

export default BotAvatar;