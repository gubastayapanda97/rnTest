import React, {useEffect} from 'react';
import {View, Animated} from 'react-native';

import WaitingIndicator from '../../../assets/images/waitingIndicator.png';

import styles from './style';

const Loading = ({isLoading = true}) => {
  const spinValue = new Animated.Value(0);

  const _animate = Animated.timing(spinValue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
  });

  const _animateStart = () =>
    _animate.start(() => {
      spinValue.setValue(0);
      _animateStart();
    });

  useEffect(() => {
    _animateStart();
    return () => _animate.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{...styles.indicatorIcon, transform: [{rotate: spin}]}}
        source={WaitingIndicator}
      />
    </View>
  );
};

export default Loading;
