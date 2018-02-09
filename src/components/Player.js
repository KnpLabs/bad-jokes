import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { RkButton, RkText, RkTextInput } from 'react-native-ui-kitten';
import t from 'tcomb-form-native';
import { globalStyles } from '../styles/Global';

const Form = t.form.Form;

const Teams = t.struct({
    firstTeam: t.String,
    secondTeam: t.String
});

const options = {
    fields: {
        firstTeam: {
            template: fieldTemplate,
            label: 'Equipe n°1',
            placeholder: 'Entrez le nom de l\'équipe n°1',
            error: 'Veuillez entrer le nom de l\'équipe.'
        },
        secondTeam: {
            template: fieldTemplate,
            label: 'Equipe n°2',
            placeholder: 'Entrez le nom de l\'équipe n°2',
            error: 'Veuillez entrer le nom de l\'équipe.'
        },
    },
};

/**
 * Customize rendered fields
 */
function fieldTemplate(locals) {
    var error =
        locals.hasError && locals.error ? (
            <Text accessibilityLiveRegion="polite" style={globalStyles.error}>
                {locals.error}
            </Text>
        ) : null;

    return (
        <View>
            <RkText style={globalStyles.text}>{locals.label}</RkText>
            <RkTextInput rkType='bordered'
                         style={globalStyles.field}
                         inputStyle={globalStyles.input}
                         onChangeText={(value) => locals.onChange(value)}
                         placeholder={locals.placeholder}/>
            {error}
        </View>
    );
}

export class Player extends React.Component {
    handleSubmit = () => {
        var value = this.refs.form.getValue();

        if (value) {
            this.props.editTeamsNames(value.firstTeam, value.secondTeam);
            this.props.navigation.navigate('Game');
        }
    };

    render() {
        return (
            <View style={globalStyles.container}>
                <ScrollView scrollEnabled={false}>
                    <Form type={Teams}
                          ref="form"
                          options={options} />
                </ScrollView>
                <View style={globalStyles.container}>
                    <RkButton style={globalStyles.btn}
                              rkType="xlarge"
                              onPress={this.handleSubmit}
                              contentStyle={{color: 'white'}}>Continuer</RkButton>
                </View>
            </View>
        );
    };
}
