import React, { useState } from 'react';
import { ScrollView, TextInput, Button, StyleSheet } from 'react-native';

const PredictionForm = () => {
    const [formData, setFormData] = useState({
        player_game_count: '',
        attempts: '',
        avoided_tackles: '',
        breakaway_attempts: '',
        breakaway_percent: '',
        breakaway_yards: '',
        designed_yards: '',
        drops: '',
        elu_recv_mtf: '',
        elu_rush_mtf: '',
        elu_yco: '',
        elusive_rating: '',
        explosive: '',
        first_downs: '',
        fumbles: '',
        gap_attempts: '',
        grades_hands_fumble: '',
        grades_offense: '',
        grades_offense_penalty: '',
        grades_pass: '',
        grades_pass_block: '',
        grades_pass_route: '',
        grades_run: '',
        grades_run_block: '',
        longest: '',
        penalties: '',
        rec_yards: '',
        receptions: '',
        routes: '',
        run_plays: '',
        scramble_yards: '',
        scrambles: '',
        targets: '',
        total_touches: '',
        touchdowns: '',
        yards: '',
        yards_after_contact: '',
        yco_attempt: '',
        ypa: '',
        yprr: '',
        zone_attempts: ''
      });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://<your-backend-url>/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(`Predicted Classification: ${result.prediction}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
  <TextInput
    placeholder="Player Game Count"
    onChangeText={(value) => handleInputChange('player_game_count', value)}
    value={formData.player_game_count}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Attempts"
    onChangeText={(value) => handleInputChange('attempts', value)}
    value={formData.attempts}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Avoided Tackles"
    onChangeText={(value) => handleInputChange('avoided_tackles', value)}
    value={formData.avoided_tackles}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Breakaway Attempts"
    onChangeText={(value) => handleInputChange('breakaway_attempts', value)}
    value={formData.breakaway_attempts}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Breakaway Percent"
    onChangeText={(value) => handleInputChange('breakaway_percent', value)}
    value={formData.breakaway_percent}
    style={styles.input}
    keyboardType="decimal-pad"
  />
  <TextInput
    placeholder="Breakaway Yards"
    onChangeText={(value) => handleInputChange('breakaway_yards', value)}
    value={formData.breakaway_yards}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Designed Yards"
    onChangeText={(value) => handleInputChange('designed_yards', value)}
    value={formData.designed_yards}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Drops"
    onChangeText={(value) => handleInputChange('drops', value)}
    value={formData.drops}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Elusive Rating"
    onChangeText={(value) => handleInputChange('elusive_rating', value)}
    value={formData.elusive_rating}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Explosive"
    onChangeText={(value) => handleInputChange('explosive', value)}
    value={formData.explosive}
    style={styles.input}
    keyboardType="numeric"
  />
   <TextInput
    placeholder="First Downs"
    onChangeText={(value) => handleInputChange('first_downs', value)}
    value={formData.first_downs}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Fumbles"
    onChangeText={(value) => handleInputChange('fumbles', value)}
    value={formData.fumbles}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Gap Attempts"
    onChangeText={(value) => handleInputChange('gap_attempts', value)}
    value={formData.gap_attempts}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Grades Hands Fumble"
    onChangeText={(value) => handleInputChange('grades_hands_fumble', value)}
    value={formData.grades_hands_fumble}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Grades Offense"
    onChangeText={(value) => handleInputChange('grades_offense', value)}
    value={formData.grades_offense}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Grades Offense Penalty"
    onChangeText={(value) => handleInputChange('grades_offense_penalty', value)}
    value={formData.grades_offense_penalty}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Grades Pass"
    onChangeText={(value) => handleInputChange('grades_pass', value)}
    value={formData.grades_pass}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Grades Pass Block"
    onChangeText={(value) => handleInputChange('grades_pass_block', value)}
    value={formData.grades_pass_block}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Grades Pass Route"
    onChangeText={(value) => handleInputChange('grades_pass_route', value)}
    value={formData.grades_pass_route}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Grades Run"
    onChangeText={(value) => handleInputChange('grades_run', value)}
    value={formData.grades_run}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Grades Run Block"
    onChangeText={(value) => handleInputChange('grades_run_block', value)}
    value={formData.grades_run_block}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Longest"
    onChangeText={(value) => handleInputChange('longest', value)}
    value={formData.longest}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Penalties"
    onChangeText={(value) => handleInputChange('penalties', value)}
    value={formData.penalties}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Rec Yards"
    onChangeText={(value) => handleInputChange('rec_yards', value)}
    value={formData.rec_yards}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Receptions"
    onChangeText={(value) => handleInputChange('receptions', value)}
    value={formData.receptions}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Routes"
    onChangeText={(value) => handleInputChange('routes', value)}
    value={formData.routes}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Run Plays"
    onChangeText={(value) => handleInputChange('run_plays', value)}
    value={formData.run_plays}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Scramble Yards"
    onChangeText={(value) => handleInputChange('scramble_yards', value)}
    value={formData.scramble_yards}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Scrambles"
    onChangeText={(value) => handleInputChange('scrambles', value)}
    value={formData.scrambles}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Targets"
    onChangeText={(value) => handleInputChange('targets', value)}
    value={formData.targets}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Total Touches"
    onChangeText={(value) => handleInputChange('total_touches', value)}
    value={formData.total_touches}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Touchdowns"
    onChangeText={(value) => handleInputChange('touchdowns', value)}
    value={formData.touchdowns}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Yards"
    onChangeText={(value) => handleInputChange('yards', value)}
    value={formData.yards}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Yards After Contact"
    onChangeText={(value) => handleInputChange('yards_after_contact', value)}
    value={formData.yards_after_contact}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="YCO Attempt"
    onChangeText={(value) => handleInputChange('yco_attempt', value)}
    value={formData.yco_attempt}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="YPA"
    onChangeText={(value) => handleInputChange('ypa', value)}
    value={formData.ypa}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="YPRR"
    onChangeText={(value) => handleInputChange('yprr', value)}
    value={formData.yprr}
    style={styles.input}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Zone Attempts"
    onChangeText={(value) => handleInputChange('zone_attempts', value)}
    value={formData.zone_attempts}
    style={styles.input}
    keyboardType="numeric"
  />

  <Button title="Submit" onPress={handleSubmit} />
</ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
});

export default PredictionForm;
