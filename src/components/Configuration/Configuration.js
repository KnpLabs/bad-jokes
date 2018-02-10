import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { RkButton, RkText, RkTextInput } from 'react-native-ui-kitten';
import t from 'tcomb-form-native';
import { globalStyles } from '../../styles/Global';

const Form = t.form.Form;

const Teams = t.struct({
  firstTeam: t.String,
  secondTeam: t.String,
  rounds: t.Number
});

const options = {
  fields: {
    firstTeam: {
      template: fieldTemplate,
      label: 'Équipe n° 1',
      placeholder: 'Entrez le nom de l’équipe n° 1',
      error: 'Veuillez entrer le nom de l’équipe.'
    },
    secondTeam: {
      template: fieldTemplate,
      label: 'Équipe n° 2',
      placeholder: 'Entrez le nom de l’équipe n° 2',
      error: 'Veuillez entrer le nom de l’équipe.'
    },
    rounds: {
      template: fieldTemplate,
      label: 'Nombre de manches',
      error: 'Veuillez entrer le nombre de manches.'
    },
  },
};

/**
 * Customize rendered fields
 */
function fieldTemplate(locals) {
  var error = locals.hasError && locals.error
    ? (
      <Text accessibilityLiveRegion='polite' style={globalStyles.error}>
          {locals.error}
      </Text>
    ) : null;

  return (
    <View>
      <RkText style={globalStyles.text}>{locals.label}</RkText>
      <RkTextInput
        rkType='bordered'
        style={globalStyles.field}
        inputStyle={globalStyles.input}
        onChangeText={(value) => locals.onChange(value)}
        value={locals.value}
        placeholder={locals.placeholder}
      />
      {error}
    </View>
  );
}

export class Configuration extends React.Component {
  handleSubmit = () => {
    var value = this.refs.form.getValue();

    if (value) {
      this.props.editConfiguration(value.firstTeam, value.secondTeam, value.rounds);
      this.props.navigation.navigate('Game');
    }
  };

  render() {
    return (
      <View style={globalStyles.container}>
        <ScrollView scrollEnabled={false}>
          <Form
            type={Teams}
            ref='form'
            value={{
              firstTeam: this.props.teams.first.name || '',
              secondTeam: this.props.teams.second.name || '',
              rounds: this.props.jokesNumber / 2 || '5',
            }}
            options={options}
          />
        </ScrollView>
        <View style={globalStyles.container}>
          <RkButton
            style={globalStyles.bigBottomBtn}
            rkType='xlarge'
            onPress={this.handleSubmit}
            contentStyle={{color: 'white'}}
          >
            <Text style={[globalStyles.boldBtnContent, {fontSize: 20, fontWeight: 'bold'}]}>Continuer</Text>
          </RkButton>
        </View>
      </View>
    );
  };
}
