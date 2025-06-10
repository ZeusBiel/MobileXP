import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import InputAuth from '@/components/InputAuth';
import BotaoPrincipalAuth from '@/components/BotaoPrincipalAuth';
import BotaoSocial from '@/components/BotaoSocial';
import AuthLink from '@/components/AuthLink';
import Separator from '@/components/Separator';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export default function CadastroScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!email) {
      newErrors.email = 'O campo de e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Formato de e-mail inválido.';
    }
    if (!senha) newErrors.senha = 'O campo de senha é obrigatório.';
    else if (senha.length < 6) newErrors.senha = 'A senha deve ter no mínimo 6 caracteres.';
    if (senha !== confirmarSenha) newErrors.confirmarSenha = 'As senhas não coincidem.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCadastro = async () => {
    if (!validate()) return;

    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      router.replace({
        pathname: '/login',
        params: { successMessage: 'Conta criada com sucesso! Faça o login para continuar.' },
      });
    } catch (error: any) {
      const newErrors: { [key: string]: string } = {};
      if (error.code === 'auth/email-already-in-use') {
        newErrors.email = 'Este e-mail já está em uso.';
      } else {
        newErrors.general = 'Ocorreu um erro. Tente novamente.';
      }
      setErrors(newErrors);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>XP Smart Advisor</Text>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Crie a sua conta</Text>
          <Text style={styles.subtitle}>Use o seu email para criar uma conta nova</Text>
          
          <InputAuth placeholder="email@domain.com" value={email} onChangeText={setEmail} />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          
          <InputAuth placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
          {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}
          
          <InputAuth placeholder="Confirmar senha" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry />
          {errors.confirmarSenha && <Text style={styles.errorText}>{errors.confirmarSenha}</Text>}
          
          {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}

          <BotaoPrincipalAuth onPress={handleCadastro} isLoading={isLoading} />
          <Separator />
          <BotaoSocial />
          <AuthLink onPress={() => router.push('/login')} textoNormal="Já tem conta?" textoLink=" Faça o login." />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0d1117' },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 40, alignItems: 'center' },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#58a6ff', marginBottom: 40 },
  formContainer: { width: '100%', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '600', color: '#c9d1d9', alignSelf: 'flex-start', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#8b949e', alignSelf: 'flex-start', marginBottom: 24 },
  errorText: { color: '#f85149', alignSelf: 'flex-start', marginBottom: 10, marginTop: -10,},
});