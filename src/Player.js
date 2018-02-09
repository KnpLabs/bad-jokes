import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { RkButton, RkText, RkTextInput } from 'react-native-ui-kitten';
import t from 'tcomb-form-native';
import { editTeamsNames } from "./actions/game";

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
            <Text accessibilityLiveRegion="polite" style={styles.error}>
                {locals.error}
            </Text>
        ) : null;

    return (
        <View>
            <RkText style={styles.text}>{locals.label}</RkText>
            <RkTextInput rkType='bordered'
                         style={styles.field}
                         inputStyle={styles.input}
                         onChangeText={(value) => locals.onChange(value)}
                         placeholder={locals.placeholder}/>
            {error}
        </View>
    );
}

class PlayerContainer extends React.Component {
    handleSubmit = () => {
        var value = this.refs.form.getValue();

        if (value) {
            this.props.editTeamsNames(value.firstTeam, value.secondTeam);
            this.props.navigation.navigate('Game');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView scrollEnabled={false}>
                    <Form type={Teams}
                          ref="form"
                          options={options} />
                </ScrollView>
                <View style={styles.container}>
                    <RkButton style={styles.button}
                              rkType="xlarge"
                              onPress={this.handleSubmit}
                              contentStyle={{color: 'white'}}>Continuer</RkButton>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 30,
    },
    error: {
        color: 'red',
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 10,
    },
    field: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 0,
    },
    input: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        editTeamsNames: (firstTeam, secondTeam) => {
            dispatch(editTeamsNames(firstTeam, secondTeam))
        }
    }
};

export const Player = connect(null, mapDispatchToProps)(PlayerContainer);
