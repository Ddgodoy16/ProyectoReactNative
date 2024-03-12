import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';

export const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); // Convertir a cadena de fecha
  const [searchDate, setSearchDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleSearch = () => {
       setSelectedDate(searchDate);
  };

  return (
    <View>
      <TextInput
        placeholder="(YYYY-MM-DD)"
        value={searchDate}
        onChangeText={setSearchDate}
      />
      <Button title="Buscar" onPress={handleSearch} />
      
     
      <Calendar
        current={selectedDate}
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
        }}
      />
    </View>
  );
};
